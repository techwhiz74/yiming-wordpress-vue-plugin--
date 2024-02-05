<template>
  <div class="mainclass">
    <menubar />
    <div class="pt-0 col-12 clearboth">
      <div class="manageTabView " :class="{ phighlight: isHighlighted } ">
        <TabView :style="{ '--tabview-color': defaultColorCode }" :scrollable="true">
          <TabPanel class="tab-btn-layout">
            <template #header>
              <div class="tabHeading" @click="handleFirstTabClick" :style="{ 'color': selectedTab===0?defaultColorCode:'#989EA0' }" >
                <span class="pr-10" >掛</span><span class="pl-10">號</span>
              </div>
            </template>

            <!-- DESKTOP VIEW -->
            <div class="hideThingsOnMobileView accordionData" v-if="!isA">
              <table class="dappointmentData">
                <Accordion :activeIndex="activeIndex">
                  <template v-for="(week, index) in weeks" :key="index" >
                    <AccordionTab  >
                      <template #header>
                        <thead>
                          <tr class="table-row">
                            <th class="table-column btlr-10 bblr-10"></th>
                            <th
                              class="table-column"
                              v-for="(wk, ind) in weeks[index].days"
                              :key="ind"
                              :class="[
                                ind === weeks[index].days.length - 1
                                  ? ' btrr-10 bbrr-10'
                                  : '',
                              ]"
                            >
                              <span class="span3">{{ wk.dayName }}</span> <br />
                              <span class="span4">{{ wk.date }}</span>
                            </th>
                          </tr>
                        </thead>
                      </template>
                      <tbody>
                        <tr class="table-row">
                          <td class="table-column">
                            <span class="span1 fw-300">早診</span> <br />
                            <span
                              class="span2 fw-400"
                              v-if="
                                this.apirespo[0] &&
                                this.apirespo[0].data.shiftTimeList[0]
                              "
                              >{{
                                formatSlotTime(
                                  this.apirespo[0].data.shiftTimeList[0]
                                )
                              }}</span
                            >
                          </td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[0].date, 0)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[1].date, 0)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[2].date, 0)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[3].date, 0)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[4].date, 0)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[5].date, 0)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[6].date, 0)
                            "
                          ></td>
                        </tr>
                        <tr class="table-row bgBorderCollapse">
                          <td class="table-column">
                            <span class="span1 fw-300">午診</span> <br />
                            <span
                              class="span2 fw-400"
                              v-if="
                                this.apirespo[0] &&
                                this.apirespo[0].data.shiftTimeList[1]
                              "
                              >{{
                                formatSlotTime(
                                  this.apirespo[0].data.shiftTimeList[1]
                                )
                              }}</span
                            >
                          </td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[0].date, 1)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[1].date, 1)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[2].date, 1)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[3].date, 1)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[4].date, 1)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[5].date, 1)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[6].date, 1)
                            "
                          ></td>
                        </tr>
                        <tr class="table-row">
                          <td class="table-column">
                            <span class="span1 fw-300">晚診</span> <br />
                            <span
                              class="span2 fw-400"
                              v-if="
                                this.apirespo[0] &&
                                this.apirespo[0].data.shiftTimeList[2]
                              "
                              >{{
                                formatSlotTime(
                                  this.apirespo[0].data.shiftTimeList[2]
                                )
                              }}</span
                            >
                          </td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[0].date, 2)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[1].date, 2)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[2].date, 2)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[3].date, 2)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[4].date, 2)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[5].date, 2)
                            "
                          ></td>
                          <td
                            class="table-column"
                            v-html="
                              this.apirespodata(weeks[index].days[6].date, 2)
                            "
                          ></td>
                        </tr>
                      </tbody>
                    </AccordionTab>
                  </template>
                </Accordion>
              </table>
            </div>

            <div class="hideThingsOnDesktopView" v-if="!showRegistrationForm">
              <span class="calendarDiv p-float-label">
                <Calendar
                  v-model="datePickr"
                  inline
                  @date-select="handleDateSelect"
                />
              </span>

              <TabView
                class="innerTab"
                :style="{ '--tabview-color': defaultColorCode }"
              >
                <TabPanel v-if="slotTimeArrList.length > 0">
                  <template #header>
                    <div class="tabPanelDiv">
                      <div class="consultation">
                        <span class="leftCont">{{
                          slotTimeArrList[0].leftLabel
                        }}</span
                        ><span class="rightCont">{{
                          slotTimeArrList[0].rightLabel
                        }}</span>
                      </div>
                      <div class="slot" v-if="slotTimeArrList[0].slot">
                        {{ formatSlotTime(slotTimeArrList[0].slot) }}
                      </div>
                    </div>
                  </template>
                  <div
                    v-for="(outerArray, outerIndex) in dailyDataList"
                    :key="outerIndex"
                  >
                    <div
                      v-for="(daily, innerIndex) in outerArray"
                      :key="innerIndex"
                    >
                      <div
                        class="doctorCard"
                        v-if="daily.regFlag === 'Y' && daily.shiftNo === '1'"
                      >
                        <div class="dImg">
                          <img :src="`${imgPath}icons/image_42_0.png`" />
                        </div>
                        <div class="dDetails">
                          <div class="dName">{{ daily.docName }}醫師</div>
                          <div class="dData">
                            <div class="dInfo1">
                              <span class="span1"
                                ><img :src="ImgFetchLogic('today.png')"
                              /></span>
                              <span class="span2">{{ daily.nextNum }}號</span>
                            </div>
                            <div class="dInfo2">
                              <span class="span1"
                                ><img :src="ImgFetchLogic('clinic.png')"
                              /></span>
                              <span class="span2"
                                >{{ daily.deptRoom }}診間</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dBtn">
                          <Button
                            class="submitBtn"
                            label="我要掛號"
                            severity="warning"
                            @click="handleRegistrationClick(daily)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel v-if="slotTimeArrList.length > 0">
                  <template #header>
                    <div class="tabPanelDiv">
                      <div class="consultation">
                        <span class="leftCont">{{
                          slotTimeArrList[1].leftLabel
                        }}</span
                        ><span class="rightCont">{{
                          slotTimeArrList[1].rightLabel
                        }}</span>
                      </div>
                      <div class="slot" v-if="slotTimeArrList[1].slot">
                        {{ formatSlotTime(slotTimeArrList[1].slot) }}
                      </div>
                    </div>
                  </template>
                  <div
                    v-for="(outerArray, outerIndex) in dailyDataList"
                    :key="outerIndex"
                  >
                    <div
                      v-for="(daily, innerIndex) in outerArray"
                      :key="innerIndex"
                    >
                      <div
                        class="doctorCard"
                        v-if="daily.regFlag === 'Y' && daily.shiftNo === '2'"
                      >
                        <div class="dImg">
                          <img :src="`${imgPath}icons/image_42_0.png`" />
                        </div>
                        <div class="dDetails">
                          <div class="dName">{{ daily.docName }}醫師</div>
                          <div class="dData">
                            <div class="dInfo1">
                              <span class="span1"
                                ><img :src="ImgFetchLogic('today.png')"
                              /></span>
                              <span class="span2">{{ daily.nextNum }}號</span>
                            </div>
                            <div class="dInfo2">
                              <span class="span1"
                                ><img :src="ImgFetchLogic('clinic.png')"
                              /></span>
                              <span class="span2"
                                >{{ daily.deptRoom }}診間</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dBtn">
                          <Button
                            class="submitBtn"
                            label="我要掛號"
                            severity="warning"
                            @click="handleRegistrationClick(daily)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel v-if="slotTimeArrList.length > 0">
                  <template #header>
                    <div class="tabPanelDiv">
                      <div class="consultation">
                        <span class="leftCont">{{
                          slotTimeArrList[2].leftLabel
                        }}</span
                        ><span class="rightCont">{{
                          slotTimeArrList[2].rightLabel
                        }}</span>
                      </div>
                      <div class="slot" v-if="slotTimeArrList[2].slot">
                        {{ formatSlotTime(slotTimeArrList[2].slot) }}
                      </div>
                    </div>
                  </template>
                  <div
                    v-for="(outerArray, outerIndex) in dailyDataList"
                    :key="outerIndex"
                  >
                    <div
                      v-for="(daily, innerIndex) in outerArray"
                      :key="innerIndex"
                    >
                      <div
                        class="doctorCard"
                        v-if="daily.regFlag === 'Y' && daily.shiftNo === '3'"
                      >
                        <div class="dImg">
                          <img :src="`${imgPath}icons/image_42_0.png`" />
                        </div>
                        <div class="dDetails">
                          <div class="dName">{{ daily.docName }}醫師</div>
                          <div class="dData">
                            <div class="dInfo1">
                              <span class="span1"
                                ><img :src="ImgFetchLogic('today.png')"
                              /></span>
                              <span class="span2">{{ daily.nextNum }}號</span>
                            </div>
                            <div class="dInfo2">
                              <span class="span1"
                                ><img :src="ImgFetchLogic('clinic.png')"
                              /></span>
                              <span class="span2"
                                >{{ daily.deptRoom }}診間</span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dBtn">
                          <Button
                            class="submitBtn"
                            label="我要掛號"
                            severity="warning"
                            @click="handleRegistrationClick(daily)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabView>
            </div>

            <!-- DESKTOP VIEW -->
            <div
              class="hideThingsOnMobileView regInfo"
              v-if="isRegistrationForm"
            >
              掛號資料 <span>（尚未完成掛號，請填妥資料）</span>
            </div>

            <!-- DESKTOP VIEW + MOBILE VIEW -->
            <div class="regidterFormSection" v-if="isRegistrationForm">
              <div class="radioGroup grid pl-2">
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue('身分證號')"
                    v-model="ingredient"
                    inputId="ingredient1"
                    name="pizza"
                    value="身分證號"
                  />
                  <label for="ingredient1" class="ml-2">身分證號</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue('病歷號')"
                    v-model="ingredient"
                    inputId="ingredient2"
                    name="pizza"
                    value="病歷號"
                  />
                  <label for="ingredient2" class="ml-2">病歷號</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue('護照號碼')"
                    v-model="ingredient"
                    inputId="ingredient3"
                    name="pizza"
                    value="護照號碼"
                  />
                  <label for="ingredient3" class="ml-2">護照號碼</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue('居留證號碼')"
                    v-model="ingredient"
                    inputId="ingredient4"
                    name="pizza"
                    value="居留證號碼"
                  />
                  <label for="ingredient4" class="ml-2">居留證號碼</label>
                </div>
              </div>
              <div class="grid">
                <div class="col-12">
                  <div class="grid">
                    <div class="col-1">
                      <div class="vectorIconDiv">
                        <img
                          :src="ImgFetchLogic('identification_documents.png')"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-11">
                      <InputText
                        type="text"
                        class="form-control ml-10"
                        :placeholder="placeholder.identification_documents"
                        v-model="identification"
                        @focus="clearError1('errID')"
                      />
                      <span
                        v-if="errID"
                        :style="{ color: 'red', float: 'right' }"
                      >
                        {{ errID }}</span
                      >
                    </div>
                    <div class="col-1">
                      <div class="vectorIconDiv">
                        <img :src="ImgFetchLogic('birthday.png')" alt="" />
                      </div>
                    </div>
                    <div class="col-11">
                      <InputText
                        type="text"
                        class="form-control ml-10"
                        :placeholder="placeholder.birthday"
                        v-model="bday"
                        @focus="clearError1('errBday')"
                      />
                      <span
                        v-if="errBday"
                        :style="{ color: 'red', float: 'right' }"
                      >
                        {{ errBday }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="desktopCancelColor groupOfBtn">
                  <Button
                    class="submitBtn"
                    label="確認"
                    severity="warning"
                    @click="onSubmitBtnClickData()"
                  />
                  <Button
                    class="canelBtn"
                    label="取消"
                    severity="warning"
                    @click="cancleFirstForm"
                  />
                </div>
              </div>
            </div>

            <!-- DESKTOP VIEW -->
            <div class="hideThingsOnMobileView regInfo" v-if="fullRegForm">
              掛號資料 <span>（尚未完成掛號，請填妥資料）</span>
            </div>

            <!-- DESKTOP VIEW + MOBILE VIEW -->
            <div class="regidterFormSection" v-if="fullRegForm">
              <div class="radioGroup grid pl-2">
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue1('身分證號')"
                    v-model="registrationForm.idType"
                    inputId="ingredient5"
                    name="pizza1"
                    value="身分證號"
                  />
                  <label for="ingredient5" class="ml-2">身分證號</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue1('病歷號')"
                    v-model="registrationForm.idType"
                    inputId="ingredient6"
                    name="pizza1"
                    value="病歷號"
                  />
                  <label for="ingredient6" class="ml-2">病歷號</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue1('護照號碼')"
                    v-model="registrationForm.idType"
                    inputId="ingredient7"
                    name="pizza1"
                    value="護照號碼"
                  />
                  <label for="ingredient7" class="ml-2">護照號碼</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue1('居留證號碼')"
                    v-model="registrationForm.idType"
                    inputId="ingredient8"
                    name="pizza1"
                    value="居留證號碼"
                  />
                  <label for="ingredient8" class="ml-2">居留證號碼</label>
                </div>
              </div>
              <div class="grid">
                <div class="col-12">
                  <div class="grid">
                    <div class="col-1">
                      <div class="vectorIconDiv">
                        <img :src="ImgFetchLogic('family.png')" alt="" />
                      </div>
                    </div>
                    <div class="col-11">
                      <Dropdown
                        v-model="registrationForm.regPerson"
                        :options="members"
                        optionLabel="name"
                        placeholder="本人／家屬／朋友"
                        class="form-control ml-10 w-full md:w-14rem"
                        @change="handleDropdownSelection"
                      />
                    </div>
                    <div class="col-1">
                      <div class="vectorIconDiv" v-if="!showFields">
                        <img
                          :src="ImgFetchLogic('identification_documents.png')"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-11">
                      <InputText
                        v-if="!showFields"
                        type="text"
                        class="form-control ml-10"
                        :placeholder="placeholder.identification_documents1"
                        v-model="registrationForm.patData"
                        @focus="clearError1('errID')"
                      />
                      <span
                        v-if="errID"
                        :style="{ color: 'red', float: 'right' }"
                      >
                        {{ errID }}</span
                      >
                    </div>

                    <div v-if="!showFields && !diabledFields" class="col-1">
                      <div class="vectorIconDiv">
                        <img :src="ImgFetchLogic('user.png')" alt="" />
                      </div>
                    </div>
                    <div class="col-11" v-if="!showFields && !diabledFields">
                      <InputText
                        type="text"
                        class="form-control ml-10"
                        placeholder="看診人姓名"
                        v-model="registrationForm.patientName"
                      />
                    </div>
                    <div class="col-1" v-if="!showFields && !diabledFields">
                      <div v-if="!showFields" class="vectorIconDiv pt-0">
                        <img :src="ImgFetchLogic('gender.png')" alt="" />
                      </div>
                    </div>
                    <div class="col-11" v-if="!showFields && !diabledFields">
                      <div class="m-0 genderRadio radioGroup grid">
                        <div class="widthauto col-6 mb-1">
                          <RadioButton
                            v-model="registrationForm.gender"
                            inputId="ingredient5"
                            name="gender"
                            value="M"
                          />
                          <label for="ingredient5" class="ml-2">男</label>
                        </div>
                        <div class="widthauto col-6 mb-1">
                          <RadioButton
                            v-model="registrationForm.gender"
                            inputId="ingredient6"
                            name="gender"
                            value="F"
                          />
                          <label for="ingredient6" class="ml-2">女</label>
                        </div>
                      </div>
                    </div>
                    <div v-if="!showFields" class="col-1">
                      <div class="vectorIconDiv">
                        <img :src="ImgFetchLogic('birthday.png')" alt="" />
                      </div>
                    </div>
                    <div v-if="!showFields" class="col-11">
                      <InputText
                        type="text"
                        class="form-control ml-10"
                        :placeholder="placeholder.birthday1"
                        v-model="registrationForm.bday"
                        @focus="clearError1('errBday')"
                      />
                      <span
                        v-if="errBday"
                        :style="{ color: 'red', float: 'right' }"
                      >
                        {{ errBday }}</span
                      >
                    </div>
                    <div v-if="!showFields" class="col-1">
                      <div class="vectorIconDiv">
                        <img :src="ImgFetchLogic('smartphone.png')" alt="" />
                      </div>
                    </div>
                    <div v-if="!showFields" class="col-11">
                      <InputText
                        type="number"
                        class="form-control ml-10"
                        placeholder="範例：0912345678"
                        v-model="registrationForm.mobile"
                        maxlength="10"
                        @focus="clearError1('errMobile')"
                        @change="validateMobileNumber(registrationForm.mobile)"
                      />
                      <span
                        v-if="errMobile"
                        :style="{ color: 'red', float: 'right' }"
                      >
                        {{ errMobile }}</span
                      >
                    </div>
                    <div v-if="!showFields" class="col-1">
                      <div class="vectorIconDiv">
                        <img :src="ImgFetchLogic('home.png')" alt="" />
                      </div>
                    </div>
                    <div class="col-11" v-if="!showFields">
                      <InputText
                        type="text"
                        class="form-control ml-10"
                        placeholder="通訊地址（選填）"
                        v-model="registrationForm.addr"
                      />
                    </div>
                  </div>
                </div>
                <div class="desktopCancelColor groupOfBtn">
                  <Button
                    class="submitBtn"
                    label="確認"
                    severity="warning"
                    @click="confirmRegistration"
                  />
                  <Button
                    class="canelBtn"
                    label="取消"
                    severity="warning"
                    @click="cancleRegistration"
                  />
                </div>
              </div>
            </div>

            <div
              class="dappointmentDetailSection appointmentDetailSection"
              v-if="isSuccessFor1"
            >
              <div class="regInfo sccuessInfo">
                <img :src="`${imgPath}icons/success.png`" />
                <div class="smsg">掛號成功</div>
              </div>

              <!-- DESKTOP VIEW -->
              <div
                class="hideThingsOnMobileView appointmentData"
                v-if="regDetailAfterRegFormSuccessfulFor1"
              >
                <div class="table-row">
                  <div class="table-column">
                    <span
                      ><img :src="`${imgPath}icons/rs_person.png`" /> 姓名
                    </span>
                    {{ regDetailAfterRegFormSuccessful.patName }}
                  </div>
                  <div
                    class="table-column"
                    v-if="regDetailAfterRegFormSuccessful.opdDate"
                  >
                    <span
                      ><img :src="`${imgPath}icons/rs_calendar.png`" /> 看診日期
                    </span>
                    {{
                      regDetailAfterRegFormSuccessful.opdDate.replace(/-/g, ".")
                    }}
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <span
                      ><img :src="`${imgPath}icons/rs_doctor.png`" /> 醫師
                    </span>
                    {{ regDetailAfterRegFormSuccessful.docName }}
                  </div>
                  <div
                    class="table-column"
                    v-if="
                      regDetailAfterRegFormSuccessful.shiftStime &&
                      regDetailAfterRegFormSuccessful.shiftStime
                    "
                  >
                    <span
                      ><img :src="`${imgPath}icons/rs_clock.png`" /> 看診時段
                    </span>
                    {{
                      formatTime(regDetailAfterRegFormSuccessful.shiftStime)
                    }}
                    -
                    {{ formatTime(regDetailAfterRegFormSuccessful.shiftEtime) }}
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <span
                      ><img :src="`${imgPath}icons/rs_appointment.png`" />
                      預約號碼
                    </span>
                    {{ regDetailAfterRegFormSuccessful.seqNo }}
                  </div>
                  <div class="table-column">
                    <span
                      ><img :src="`${imgPath}icons/rs_alarm.png`" />
                      參考到診時間
                    </span>
                    {{ regDetailAfterRegFormSuccessful.rsvOpdTime }}
                  </div>
                </div>
              </div>
              <div
                class="hideThingsOnMobileView desktopCancelColor groupOfBtn mb-3"
              >
                <Button class="canelBtn" label="列印" severity="warning" />
              </div>

              <!-- MOBILE VIEW -->
              <div
                class="appointmentData hideThingsOnDesktopView"
                v-if="regDetailAfterRegFormSuccessfulFor1"
              >
                <div class="table-row">
                  <div class="table-column">
                    <img class="" :src="ImgFetchLogic('user.png')" /> 姓名
                  </div>
                  <div class="table-column">
                    {{ regDetailAfterRegFormSuccessful.patName }}
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('calendar.png')" /> 看診日期
                  </div>
                  <div
                    class="table-column"
                    v-if="regDetailAfterRegFormSuccessful.opdDate"
                  >
                    {{
                      regDetailAfterRegFormSuccessful.opdDate.replace(/-/g, ".")
                    }}
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('doctor.png')" /> 醫師
                  </div>
                  <div class="table-column">
                    {{ regDetailAfterRegFormSuccessful.docName }}
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('clock.png')" /> 看診時段
                  </div>
                  <div
                    class="table-column"
                    v-if="
                      regDetailAfterRegFormSuccessful.shiftStime &&
                      regDetailAfterRegFormSuccessful.shiftStime
                    "
                  >
                    {{
                      formatTime(regDetailAfterRegFormSuccessful.shiftStime)
                    }}
                    -
                    {{ formatTime(regDetailAfterRegFormSuccessful.shiftEtime) }}
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('today.png')" /> 預約號碼
                  </div>
                  <div class="table-column">
                    {{ regDetailAfterRegFormSuccessful.seqNo }}
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('alarm_clock.png')" /> 參考到診時間
                  </div>
                  <!-- <div class="table-column">{{formatTime(regDetailAfterRegFormSuccessful.rsvOpdTime)}}</div> -->
                  <div class="table-column">
                    {{ regDetailAfterRegFormSuccessful.rsvOpdTime }}
                  </div>
                </div>
              </div>
            </div>

            <!-- DESKTOP VIEW -->
            <!-- <div class="hideThingsOnMobileView regInfo">掛號資料</div> -->

            <!-- MOBILE VIEW + DESKTOP VIEW -->
            <div class="noInfo sccuessInfo" v-if="isCancle">
              <img :src="`${imgPath}icons/cancel.png`" />
              <div class="smsg">掛號失敗</div>
              <div class="groupOfBtn mt-4 mb-4">
                <Button
                  class="reregister submitBtn"
                  label="重新掛號"
                  severity="warning"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <div class="tabHeading" @click="handleSecondTabClick" :style="{ 'color': selectedTab===1?defaultColorCode:'#989EA0' }">
                看診號查詢
              </div>
            </template>

            <!-- DESKTOP VIEW -->
            <div class="hideThingsOnMobileView regInfo" v-if="isSuccess">
              看診號查詢
            </div>

            <!-- DESKTOP VIEW -->
            <div v-if="isSuccess">
              <table
                class="hideThingsOnMobileView dappointmentData mb-7"
                v-for="(opdSeq, index) in outGetClinicRegOpdSeqNoData"
                :key="index"
              >
                <thead>
                  <tr class="table-row">
                    <th class="table-column btlr-10">目前看診號</th>
                    <th class="table-column">醫師</th>
                    <th class="table-column">看診時段</th>
                    <th class="table-column">掛號人數</th>
                    <th class="table-column btrr-10">已看人次</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-row">
                    <td class="table-column numb">{{ opdSeq.maxSeqNo }}</td>
                    <td class="table-column">{{ opdSeq.docName }}</td>
                    <td
                      class="table-column"
                      v-if="opdSeq.shiftStartTime && opdSeq.shiftEndTime"
                    >
                      {{ formatTime(opdSeq.shiftStartTime) }} -
                      {{ formatTime(opdSeq.shiftEndTime) }}
                    </td>
                    <td class="table-column">{{ opdSeq.maxCount }}</td>
                    <td class="table-column">{{ opdSeq.maxopdCnt }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- DESKTOP VIEW -->
            <div
              class="hideThingsOnMobileView regInfo"
              v-if="isDataIsAvailableFor2"
            >
              看診號查詢
            </div>

            <!-- MOBILE VIEW -->
            <div
              class="appointmentDetailSection hideThingsOnDesktopView"
              v-for="(opdSeq, index) in outGetClinicRegOpdSeqNoData"
              :key="index"
            >
              <div class="sccuessInfo">
                <div class="queryNumber">{{ opdSeq.maxSeqNo }}</div>
                <div class="smsg">目前看診號</div>
              </div>
              <div class="appointmentData">
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('doctor.png')" /> 醫師
                  </div>
                  <div class="table-column">{{ opdSeq.docName }}</div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('clock.png')" /> 看診時段
                  </div>
                  <div
                    class="table-column"
                    v-if="opdSeq.shiftStartTime && opdSeq.shiftEndTime"
                  >
                    {{ formatTime(opdSeq.shiftStartTime) }} -
                    {{ formatTime(opdSeq.shiftEndTime) }}
                  </div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('today.png')" /> 掛號人數
                  </div>
                  <div class="table-column">{{ opdSeq.maxCount }}</div>
                </div>
                <div class="table-row">
                  <div class="table-column">
                    <img :src="ImgFetchLogic('viewed_times.png')" /> 已看人次
                  </div>
                  <div class="table-column">{{ opdSeq.maxopdCnt }}</div>
                </div>
              </div>
            </div>

            <!-- MOBILE VIEW + DESKTOP VIEW -->
            <div class="noInfo sccuessInfo" v-if="isDataIsAvailableFor2">
              <img :src="`${imgPath}icons/noInfo.png`" />
              <div class="smsg">無看診資料</div>
            </div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <div
                class="tabHeading"
                @click="handleThirdTabClick"
                :style="{ 'color': selectedTab===2?defaultColorCode:'#989EA0' }"
              >
                查詢及取消
              </div>
            </template>

            <!-- DESKTOP VIEW -->
            <div
              class="hideThingsOnMobileView regInfo"
              v-if="isCancellationRegForm"
            >
              查詢及取消
            </div>

            <!-- DESKTOP VIEW + MOBILE VIEW -->
            <div class="regidterFormSection" v-if="isCancellationRegForm">
              <div class="radioGroup grid pl-2">
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue('身分證號')"
                    v-model="ingredient"
                    inputId="ingredient1"
                    name="pizza"
                    value="身分證號"
                  />
                  <label for="ingredient1" class="ml-2">身分證號</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue('病歷號')"
                    v-model="ingredient"
                    inputId="ingredient2"
                    name="pizza"
                    value="病歷號"
                  />
                  <label for="ingredient1" class="ml-2">病歷號</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue('護照號碼')"
                    v-model="ingredient"
                    inputId="ingredient3"
                    name="pizza"
                    value="護照號碼"
                  />
                  <label for="ingredient1" class="ml-2">護照號碼</label>
                </div>
                <div class="col-6 deskcol6 mb-1">
                  <RadioButton
                    @click="getRadioValue('居留證號碼')"
                    v-model="ingredient"
                    inputId="ingredient4"
                    name="pizza"
                    value="居留證號碼"
                  />
                  <label for="ingredient1" class="ml-2">居留證號碼</label>
                </div>
              </div>

              <div class="grid">
                <div class="mt-12 mr-1 col-12">
                  <div class="grid">
                    <div class="col-1">
                      <div class="vectorIconDiv">
                        <img
                          :src="ImgFetchLogic('identification_documents.png')"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-11">
                      <InputText
                        type="text"
                        class="form-control ml-10"
                        :placeholder="placeholder.identification_documents"
                        v-model="queryCancleForm.identification_documents"
                        @focus="clearError1('errID')"
                      />
                      <span
                        v-if="errID"
                        :style="{ color: 'red', float: 'right' }"
                      >
                        {{ errID }}</span
                      >
                    </div>
                    <div class="col-1">
                      <div class="vectorIconDiv">
                        <img :src="ImgFetchLogic('birthday.png')" alt="" />
                      </div>
                    </div>
                    <div class="col-11">
                      <InputText
                        type="text"
                        class="form-control ml-10"
                        :placeholder="placeholder.birthday"
                        v-model="queryCancleForm.birthday"
                        @focus="clearError1('errBday')"
                      />
                      <span
                        v-if="errBday"
                        :style="{ color: 'red', float: 'right' }"
                      >
                        {{ errBday }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="groupOfBtn">
                  <Button
                    class="submitBtn"
                    label="確認"
                    severity="warning"
                    @click="onSubmitQryAndCanceSubmit"
                  />
                  <Button
                    class="canelBtn"
                    label="取消"
                    severity="warning"
                    @click="onQryCancle"
                  />
                </div>
              </div>
            </div>

            <!-- DESKTOP VIEW -->
            <div class="hideThingsOnMobileView regInfo" v-if="isDoctorCardFor3">
              查詢及取消
            </div>

            <!-- DESKTOP VIEW -->
            <div v-for="(doctor, index) in doctorDataFor3" :key="index">
              <table
                class="hideThingsOnMobileView dappointmentData mb-7"
                v-if="isDoctorCardFor3"
              >
                <thead>
                  <tr class="table-row">
                    <th class="table-column btlr-10">看診日期</th>
                    <th class="table-column">到診時間</th>
                    <th class="table-column">醫師</th>
                    <th class="table-column">看診人姓名</th>
                    <th class="table-column">預約號碼</th>
                    <th class="table-column btrr-10">是否取消</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-row">
                    <td class="table-column">
                      {{ doctor.opdDate }} <br />
                      星期五
                    </td>
                    <td class="table-column" v-if="doctor.opdStTime">
                      {{ formatTime(doctor.opdStTime) }}
                    </td>
                    <td class="table-column">{{ doctor.docName }}</td>
                    <td class="table-column">{{ doctor.patName }}</td>
                    <td class="table-column">{{ doctor.seqNo }}號</td>
                    <td class="table-column">
                      <Button
                        @click="showFancyConfirmDialogForRegCancle(doctor)"
                        class="submitBtn"
                        label="取消掛號"
                        severity="warning"
                      />
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <!-- DESKTOP VIEW -->
            <div
              class="hideThingsOnMobileView regInfo"
              v-if="isDataIsAvailableFor3"
            >
              查詢及取消
            </div>

            <!-- MOBILE VIEW -->
            <div v-if="isDoctorCardFor3">
              <div
                class="muldCard doctorCard modifypadd hideThingsOnDesktopView"
                v-for="(doctor, index) in doctorDataFor3"
                :key="index"
              >
                <div class="dImg">
                  <img :src="`${imgPath}icons/image_42_0.png`" />
                </div>
                <div class="dDetails">
                  <div class="dData">
                    <div class="dInfo1">
                      <span class="span1"
                        ><img :src="ImgFetchLogic('calendar.png')"
                      /></span>
                      <span class="span2" v-if="doctor.opdStTime">{{
                        formattedDate(doctor.opdDate)
                      }}</span>
                    </div>
                    <div class="dInfo2">
                      <span class="span1"
                        ><img :src="ImgFetchLogic('clock.png')"
                      /></span>
                      <span class="span2" v-if="doctor.opdStTime">{{
                        formatTime(doctor.opdStTime)
                      }}</span>
                    </div>
                  </div>
                  <div class="dName displayinlinblock">
                    {{ doctor.docName }} &nbsp;&nbsp;&nbsp;醫師
                  </div>
                </div>
                <div class="dNameNo">
                  <span class="span1">姓名 ：{{ doctor.patName }}</span>
                  <span class="span2">掛號號碼 ：{{ doctor.seqNo }}號</span>
                </div>
                <div class="dBtn">
                  <Button
                    class="submitBtn"
                    @click="showFancyConfirmDialogForRegCancle(doctor)"
                    label="取消掛號"
                    severity="warning"
                  />
                </div>
              </div>
            </div>

            <!-- MOBILE VIEW + DESKTOP VIEW -->
            <div class="noInfo sccuessInfo mb-5" v-if="isDataIsAvailableFor3">
              <!-- <div class="hideThingsOnMobileView regInfo">查詢及取消</div> -->
              <img :src="`${imgPath}icons/noInfo.png`" />
              <div class="smsg">無掛號資料</div>
            </div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <div
                class="tabHeading"
                @click="handleFourthTabClick"
                :style="{ 'color': selectedTab===3?defaultColorCode:'#989EA0' }"
              >
                治療預約
              </div>
            </template>
            <TreatAppoint :defaultColorCode="defaultColorCode"/>
          </TabPanel>
          <TabPanel>
            <template #header>
              <div
                class="lastChildBorder tabHeading"
                @click="handleFifthTabClick"
                :style="{ 'color': selectedTab===4?defaultColorCode:'#989EA0' }"
              >
                治療預約與取消
              </div>
            </template>
            <AppointCancel :defaultColorCode="defaultColorCode"/>
          </TabPanel>
          
        </TabView>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import menubar from "./menubar.page.vue"; // Import the Menubar component

import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";
import { defineComponent } from "vue";
import axios from "axios";
import apiConfig from "../../api-config";
import Treatment from "./treatment.vue";
import TreatAppoint from "./treat_appoint.vue";
import AppointCancel from "./appoints_cancels.vue";


export default defineComponent({
  name: "Home",
  components: {
    menubar,
    TreatAppoint,
    Treatment,
    AppointCancel
  },
  computed: {
    ...mapState(["selectedColor"]),
    defaultColorCode(): any {
      return this.selectedColor;
    },
    filteredData(): any {
      const filtered = [];

      for (let i = 0; i < this.slotTimeArrList.length; i++) {
        filtered.push(
          this.dailyDataList.map((daily) =>
            daily.filter(
              (item: any) => item.regFlag === "Y" && item.shiftNo === `${i + 1}`
            )
          )
        );
      }

      return filtered;
    },
  },
  created() {
    // console.log(this.$route.params);
    // console.log(location.href);
    if (this.$route.params.lineId == null || this.$route.params.lineId == 'null') {
      this.isLineId = "";
    } else {
      this.isLineId = this.$route.params.lineId as string;
    }
  },
  async mounted() {
    // FIRST TAB CLICK API CALL
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 27);

    await axios
      .post(`${apiConfig.baseUrl}/outGetWebClinicSchebasic`, {
        endDate: this.returnDateFormat(endDate),
        pass: "Kumar",
        startDate: this.selectedDate
          ? this.selectedDate
          : this.returnDateFormat(today),
        userId: "webapp",
        tenantId: apiConfig.commonParams.tenantId,
        tenantDbConnectionString:
          apiConfig.commonParams.tenantDbConnectionString,
      })
      .then((res: any) => {
        //  this.apirespo=res.data;
        this.apirespo.push(res.data);
        this.generateWeeks();
        if (
          res.data.data &&
          res.data.data.shiftTimeList &&
          Array.isArray(res.data.data.shiftTimeList)
        ) {
          this.shiftTimeList = Array.isArray(res.data.data.shiftTimeList)
            ? res.data.data.shiftTimeList
            : [];
        }
        for (let i = 0; i < this.slotTimeArrList.length; i++) {
          if (this.shiftTimeList[i]) {
            this.slotTimeArrList[i].slot = this.shiftTimeList[i];
          }
        }
        if (res && res.data.data && res.data.data.dataList) {
          const dataList = res.data.data.dataList;
          this.dataList.push(res.data.data.dataList);
          this.dataListTemp.push(res.data.data.dataList);
          var a = this.returnDateFormat(new Date());

          if (this.dataList.length > 0 && this.dataList[0]) {
            this.dataList = this.dataList[0].filter(
              (fw: { date: string }) => fw.date === a
            );
            this.dailyDataList = this.dataList[0].dailyDataList;
          }
          this.dataList = this.dataListTemp;
        }
      });
    this.generateWeeks();
  },
  methods: {
    async handleFirstTabClick () {
      this.selectedTab = 0

      // console.log(e,'here is event')
      this.isHighlighted = true;
      const today = new Date();
      const endDate = new Date(today);
      endDate.setDate(endDate.getDate() + 27);

      await axios
        .post(`${apiConfig.baseUrl}/outGetWebClinicSchebasic`, {
          endDate: this.returnDateFormat(endDate),
          pass: "Kumar",
          startDate: this.selectedDate
            ? this.selectedDate
            : this.returnDateFormat(today),
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
        })
        .then((res: any) => {
          //  this.apirespo=res.data;
          this.apirespo.push(res.data);
          this.generateWeeks();
          if (
            res.data.data &&
            res.data.data.shiftTimeList &&
            Array.isArray(res.data.data.shiftTimeList)
          ) {
            this.shiftTimeList = Array.isArray(res.data.data.shiftTimeList)
              ? res.data.data.shiftTimeList
              : [];
            console.log("this.shiftTimeList", this.shiftTimeList);
          }
          for (let i = 0; i < this.slotTimeArrList.length; i++) {
            if (this.shiftTimeList[i]) {
              this.slotTimeArrList[i].slot = this.shiftTimeList[i];
            }
          }
          if (res && res.data.data && res.data.data.dataList) {
            const dataList = res.data.data.dataList;
            this.dataList.push(res.data.data.dataList);
            this.dataListTemp.push(res.data.data.dataList);
            var a = this.returnDateFormat(new Date());

            if (this.dataList.length > 0 && this.dataList[0]) {
              this.dataList = this.dataList[0].filter(
                (fw: { date: string }) => fw.date === a
              );
              this.dailyDataList = this.dataList[0].dailyDataList;
            } else {
              console.log("nthi bhai aama");
            }
            this.dataList = this.dataListTemp;
          }
        });
    },
    // DYNAMIC PLACEHOLDER
    getRadioValue(getRadioValue: any) {
      this.errBday = "";
      this.errID = "";
      this.errMobile= "";
      if (getRadioValue == "身分證號") {
        this.placeholder.identification_documents = "格式：A123456789";
        this.placeholder.birthday = "生日格式：0800101";
        this.value = 1;
      }
      if (getRadioValue == "病歷號") {
        this.placeholder.identification_documents = "請輸入病歷號";
        this.placeholder.birthday = "生日格式：0800101";
        this.value = 99;
      }
      if (getRadioValue == "護照號碼") {
        this.placeholder.identification_documents = "請輸入護照號碼";
        this.placeholder.birthday = "生日格式：19910101";
        this.value = 51;
      }
      if (getRadioValue == "居留證號碼") {
        this.placeholder.identification_documents = "格式：AA12345678";
        this.placeholder.birthday = "生日格式：19910101";
        this.value = 5;
      }
      console.log(this.value);
    },
    // DYNAMIC PLACEHOLDER
    getRadioValue1(getRadioValue: any) {
      this.errBday = "";
      this.errID = "";
      this.errMobile= "";
      this.diabledFields = false;
      if (getRadioValue == "身分證號") {
        this.placeholder.identification_documents1 = "看診人身分證字號";
        this.placeholder.birthday1 = "生日格式：0800101";
        this.value1 = 1;
      }
      if (getRadioValue == "病歷號") {
        this.placeholder.identification_documents1 = "看診人病歷號";
        this.placeholder.birthday1 = "生日格式：0800101";
        this.value1 = 99;
        if(this.registrationForm.regPerson.code==="2" || this.registrationForm.regPerson.code==="3"){
          this.diabledFields = true;
        }
      }
      if (getRadioValue == "護照號碼") {
        this.placeholder.identification_documents1 = "看診人護照號碼";
        this.placeholder.birthday1 = "生日格式：19910101";
        this.value1 = 51;
      }
      if (getRadioValue == "居留證號碼") {
        this.placeholder.identification_documents1 = "看診人居留證號碼";
        this.placeholder.birthday1 = "生日格式：19910101";
        this.value1 = 5;
      }
      console.log(this.value1);
    },
    formattedDate(opdDate: any) {
      const dateParts = opdDate.split("-");
      const formatted = `${dateParts[1]}.${dateParts[2]}`;
      return formatted;
    },
    generateDays1(startDate: any) {
      const days = [];

      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const dayOfWeek = currentDate.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, etc.)

        const daysOfWeek = [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ];

        days.push({
          dayName: daysOfWeek[dayOfWeek], // Use the correct Chinese day of the week
          date: currentDate.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
          }),
        });
      }

      return days;
    },
    generateWeeks() {
      const today = new Date();
      const weeks = [];

      for (let i = 0; i < 4; i++) {
        const startDate = new Date(today);
        startDate.setDate(today.getDate() + i * 7);

        const week = {
          days: this.generateDays1(startDate),
        };
        weeks.push(week);
      }
      this.weeks = weeks;
    },
    apirespodata(appointmentDate: string, appointmentShift: any) {
      appointmentDate = appointmentDate.split("/").join("-");
      var aaa = `${new Date().getFullYear()}-${appointmentDate}`; // 09/06 = 2023-09/06
      if (this.apirespo[0]) {
        var appoData = this.apirespo[0].data;
        // console.log("appoData",appoData)
        if (Object.keys(appoData).length) {
          if (appoData.dataList && appoData.dataList.length) {
            // console.log("appoData", appoData);
            // console.log("appoData.dataList", appoData.dataList);
            var bd = appoData.dataList.filter(
              (fw: { date: string }) => fw.date === aaa
            );
            // console.log("bd", bd[0].dailyDataList);
            if (bd[0] && bd[0] !== undefined) {
              var bdAppData = bd[0].dailyDataList;
              // console.log("bdAppData", bd[0].dailyDataList);

              // MAINTAIN ALL SHIFT
              if (
                bdAppData[appointmentShift] &&
                bdAppData[appointmentShift].length
              ) {
                // console.log("bd shift1", bdAppData[appointmentShift]);
                // console.log("bd shift1", bdAppData[appointmentShift].length);
                var appointmentBtnLoop = [] as any;
                for (let i = 0; i < bdAppData[appointmentShift].length; i++) {
                  const jsonData = JSON.stringify(
                    bdAppData[appointmentShift][i]
                  );
                  appointmentBtnLoop += `<div class="appointBookedBtn"><button class="p-button p-component" id="temp${i}-${
                    bdAppData[appointmentShift][i].shiftNo
                  }-${
                    bdAppData[appointmentShift][i].opdDate
                  }" data-obj='${jsonData}' type="button" severity="warning" ${
                    this.slotCompare(aaa, appointmentShift + 1)
                      ? "disabled"
                      : ""
                  }><span class="p-button-label">${
                    bdAppData[appointmentShift][i]["docName"]
                  }醫師</span><span class="p-ink"></span></button></div>`;
                }

                // MANAGE CLICK EVENT
                for (let i = 0; i < bdAppData[appointmentShift].length; i++) {
                  const buttonId = `temp${i}-${bdAppData[appointmentShift][i].shiftNo}-${bdAppData[appointmentShift][i].opdDate}`;
                  const button = document.getElementById(buttonId);
                  if (button) {
                    button.addEventListener("click", async () => {
                      const dataObj = JSON.parse(
                        JSON.stringify(button.getAttribute("data-obj"))
                      );
                      // console.log("Button with id ${buttonId} clicked with data-obj:", dataObj);
                      this.handleRegistrationClick(
                        button.getAttribute("data-obj")
                      );
                    });
                  }
                }
                return appointmentBtnLoop;
              }
            }
          }
        }
      }
    },
    convertDateFormat(originalDate: any) {
      const parts = originalDate.split("/");
      const currentYear = new Date().getFullYear();
      const newDate = `${currentYear}-${parts[0].padStart(
        2,
        "0"
      )}-${parts[1].padStart(2, "0")}`;
      return newDate;
    },
    // IMAGE LOGIC
    ImgFetchLogic(fileName: any): string {
      const imgPath = (this as any).imgPath || ""; // Use 'as any' to bypass type checking
      return `${imgPath}icons/${localStorage.getItem(
        "ThemeColorNoHash"
      )}/${fileName}`;
    },
    // SHOW FANCY DIALOG BOX FOR DROPDOWN
    async showFancyConfirmDialogForDropDown(dynamicTitle: any) {
      const dynamicStyles = document.createElement("style");
      dynamicStyles.innerHTML = `
      .swal2-actions .swal2-cancel {
        border: 1px solid ${localStorage.getItem("ThemeColor")} !important;
        color: ${localStorage.getItem("ThemeColor")}!important;
      }`;
      document.head.appendChild(dynamicStyles);
      const result = await Swal.fire({
        title: dynamicTitle,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "是",
        cancelButtonText: "否",
      });
      if (result.isConfirmed) {
        
      } else {
    
      }
    },
    // SHOW FANCY DIALOG BOX
    async showFancyConfirmDialog() {
      const dynamicStyles = document.createElement("style");
      dynamicStyles.innerHTML = `
      .swal2-actions .swal2-cancel {
        border: 1px solid ${localStorage.getItem("ThemeColor")} !important;
        color: ${localStorage.getItem("ThemeColor")}!important;
      }`;
      document.head.appendChild(dynamicStyles);
      const result = await Swal.fire({
        title: "是否確認取消掛號",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "是",
        cancelButtonText: "否",
      });
      if (result.isConfirmed) {
        
      } else {
        
      }
    },
    // SHOW FANCY DIALOG BOX FOR REGISTATION CANCLE
    async showFancyConfirmDialogForRegCancle(doctor: any) {
      const dynamicStyles = document.createElement("style");
      dynamicStyles.innerHTML = `
      .swal2-actions .swal2-cancel {
        border: 1px solid ${localStorage.getItem("ThemeColor")} !important;
        color: ${localStorage.getItem("ThemeColor")}!important;
      }`;
      document.head.appendChild(dynamicStyles);
      const result = await Swal.fire({
        title: "是否確認取消掛號",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "是",
        cancelButtonText: "否",
      });
      if (result.isConfirmed) {
        axios
          .post(`${apiConfig.baseUrl}/outCnclRegRegbasicClinic`, {
            encounterNoList: [doctor.encounterNo.toString()],
            pass: "Kumar",
            userId: "webapp",
            tenantId: apiConfig.commonParams.tenantId,
            tenantDbConnectionString:
              apiConfig.commonParams.tenantDbConnectionString,
          })
          .then((res) => {
            if (res.data.data == "退掛成功") {
              this.doctorDataFor3 = this.doctorDataFor3.filter((d: any) => {
                return !(
                  d.opdDate === doctor.opdDate &&
                  d.docName === doctor.docName &&
                  d.opdStTime === doctor.opdStTime &&
                  d.opdEdTime === doctor.opdEdTime
                );
              });
              this.isCancellationRegForm = false;
              if (this.doctorDataFor3.length > 0) {
                this.isDoctorCardFor3 = true;
              } else if (this.doctorDataFor3.length === 0) {
                this.isDataIsAvailableFor3 = true;
                this.isDoctorCardFor3 = false;
              }
            }
          });
      } else {
        
      }
    },
    // ...mapActions(["setSelectedColor"]),
    // RETURN DATE
    returnDateFormat(date: any) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      return `${year}-${month}-${day}`;
    },
    // SELECTED DATE
    handleDateSelect(date: any) {
      this.isHighlighted = false;
      const elementsToRemoveHighlight = document.querySelectorAll(
        ".p-datepicker table td>span.p-highlight"
      );
      elementsToRemoveHighlight.forEach((element) => {
        element.classList.remove("phighlight");
      });
      var cDate = this.returnDateFormat(date);
      this.selectedDate = cDate;
      // console.log("this.selectedDate",this.selectedDate);
      this.dailyDataList = [];
      // var bd = appoData.dataList.filter((fw: { date: string; })=>fw.date === aaa);
      //  console.log('this.dataList before',this.dataList);
      if (this.dataList.length > 0 && this.dataList[0]) {
        this.dataList = this.dataList[0].filter(
          (fw: { date: string }) => fw.date === this.selectedDate
        );
        if (this.dataList.length > 0) {
          // console.log('this.dataList after',this.dataList[0].dailyDataList);
          this.dailyDataList = this.dataList[0].dailyDataList;
          //  console.log('this.dailyDataList after',this.dailyDataList);
        }
      }
      this.dataList = this.dataListTemp;
    },
    // FORMAT SLOT TIME
    formatSlotTime(slot: any) {
      const [startTime, endTime] = slot.split(" ~ ");
      const formattedStartTime =
        startTime.slice(0, 2) + ":" + startTime.slice(2);
      const formattedEndTime = endTime.slice(0, 2) + ":" + endTime.slice(2);
      return `${formattedStartTime} - ${formattedEndTime}`;
    },
    // FIRST TAB DOCTOR CARD BUTTON CLICK
    handleRegistrationClick(daily: any) {
      // this.identification='';
      // this.bday='';
      this.errBday = "";
      this.errID = "";
      // console.log("daily data",daily)
      this.tempDataForLastRegistration = daily;
      if (typeof this.tempDataForLastRegistration === "string") {
        daily = JSON.parse(daily);
        this.tempDataForLastRegistration = daily;
      }
      // const parsedData = JSON.parse(daily);
      // console.log("parsedData",parsedData)
      if (this.isLineId === null || this.isLineId === "") {
        const registrationData = {
          // "idType": "1",
          // "representId": "A12345678",
          // "birthDate": "0800101",
          pass: "Kumar",
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          docCode: daily.docCode,
          opdDate: daily.opdDate,
          shiftNo: daily.shiftNo,
          lineId: null,
        };
        // console.log("general reg registrationData",registrationData)
        this.registrationDataTemp = registrationData;
        this.showRegistrationForm = true;
        this.isRegistrationForm = true;
        this.isA = true;
      } else if (this.isLineId != "") {
        this.showRegistrationForm = true;
        this.fullRegForm = true;
        this.showFields = true;
        this.isA = true;
        const registrationData = {
          pass: "Kumar",
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          docCode: daily.docCode,
          opdDate: daily.opdDate,
          shiftNo: daily.shiftNo,
          lineId: this.isLineId,
        };
        this.registrationDataTemp = registrationData;

        // console.log("with line id", this.registrationDataTemp)
        axios
          .post(
            `${apiConfig.baseUrl}/outGetChrbasOrWebRegRecords`,
            this.registrationDataTemp
          )
          .then((res) => {
            console.log('info with line id response',res)
            if (res.data.msg !== 'ghostLineId'){
              console.log('in');
              this.showRegistrationForm = true;
              this.fullRegForm = true;
              this.regPersonList = res.data.data.regPersonList;
              this.members = res.data.data.regPersonList.map((item: any) => ({
                name: item.patName,
                code: item.representRelationship,
              }));
              // console.log("this.regPersonList",this.regPersonList);
              this.registrationForm.regPerson = this.members.find(
                  (i: any) => i.name === "本人"
              );
            } else {
              console.log('in2');
              this.isLineId = "";
              const registrationDataTmp = {
                pass: "Kumar",
                userId: "webapp",
                tenantId: apiConfig.commonParams.tenantId,
                tenantDbConnectionString:
                apiConfig.commonParams.tenantDbConnectionString,
                docCode: daily.docCode,
                opdDate: daily.opdDate,
                shiftNo: daily.shiftNo,
                lineId: null,
              };
              // console.log("general reg registrationData",registrationData)
              this.registrationDataTemp = registrationDataTmp;
              this.showRegistrationForm = true;
              this.showFields = false;
              this.isA = true;
              this.isRegistrationForm = true;
              this.fullRegForm = false;
            }
          });
      }
    },
    // HANDLE DROPDOWN
    handleDropdownSelection(item: any) {
      this.errBday = "";
      this.errID = "";
      this.errMobile = "";
      // console.log("this.regPersonList"),this.regPersonList;
      if (this.regPersonList && Array.isArray(this.regPersonList)) {
        const selectedMember = this.regPersonList.find(
          (member: any) => member.patName === item.value.name
        );
        console.log("selectedmember", selectedMember);
        this.diabledFields = false;
        if (selectedMember.idType != null) {
          this.value1 = selectedMember.idType;
          if (this.value1 === "1") {
            this.registrationForm.idType = "身分證號";
            console.log(
              "this.registrationForm.idType",
              this.registrationForm.idType
            );
          }
          if (this.value1 === "99") {
            this.registrationForm.idType = "病歷號";
            console.log(
              "this.registrationForm.idType",
              this.registrationForm.idType
            );
          }
          if (this.value1 === "51") {
            this.registrationForm.idType = "護照號碼";
            console.log(
              "this.registrationForm.idType",
              this.registrationForm.idType
            );
          }
          if (this.value1 === "5") {
            this.registrationForm.idType = "居留證號碼";
            console.log(
              "this.registrationForm.idType",
              this.registrationForm.idType
            );
          }
        }
        if (selectedMember && selectedMember.fvRvFlag === "R") {
          this.showFields = true;
          this.registrationForm.patData = selectedMember.patData || "";
          // this.registrationForm.bday = selectedMember.birthDate || '';
          if (
            selectedMember.birthDate &&
            selectedMember.birthDate != null &&
            selectedMember.birthDate.length >= 7 &&
            (selectedMember.idType === "1" || selectedMember.idType === "99")
          ) {
            const date = new Date(
              selectedMember.birthDate.substring(0, 4),
              parseInt(selectedMember.birthDate.substring(4, 6)) - 1,
              selectedMember.birthDate.substring(6, 8)
            );
            date.setFullYear(date.getFullYear() - 1911);
            const modifiedBirthDate =
                date.getFullYear().toString().padStart(3, "0") +
              ("0" + (date.getMonth() + 1)).slice(-2) +
              ("0" + date.getDate()).slice(-2);
            // console.log("Modified Birth Date:", modifiedBirthDate);
            // this.registrationForm.bday= res.data.data.regPersonList[i].birthDate;
            this.registrationForm.bday = modifiedBirthDate;
          } else {
            this.registrationForm.bday = selectedMember.birthDate;
          }
        }
        if (selectedMember.lineId === null && selectedMember.fvRvFlag === "R") {
          this.showFields = true;
        }
        if (
          selectedMember.lineId === null &&
          selectedMember.patName != "本人" &&
          selectedMember.fvRvFlag === "R"
        ) {
          this.showFields = true;
          this.representIdType = this.value;
        }
        if (
          selectedMember.lineId === null &&
          selectedMember.fvRvFlag === "F" &&
          selectedMember.patName != "本人" &&
          (selectedMember.representRelationship === "2" || "3")
        ) {
          this.fullRegForm = true;
          this.showFields = false;
          this.representIdType = this.value;
          this.registrationForm.patData = "";
          this.registrationForm.bday = "";
          if (String(this.value1) === "99") {
            this.diabledFields = true;
          }
        }
        if (
          selectedMember.lineId === null &&
          selectedMember.fvRvFlag === "F" &&
          selectedMember.patName == "本人"
        ) {
          this.fullRegForm = true;
          this.showFields = false;
           this.registrationForm.patData = selectedMember.patData || "";
           if (
            selectedMember.birthDate &&
            selectedMember.birthDate != null &&
            selectedMember.birthDate.length >= 7 &&
            (selectedMember.idType === "1" || selectedMember.idType === "99")
          ) {
            const date = new Date(
              selectedMember.birthDate.substring(0, 4),
              parseInt(selectedMember.birthDate.substring(4, 6)) - 1,
              selectedMember.birthDate.substring(6, 8)
            );
            date.setFullYear(date.getFullYear() - 1911);
            const modifiedBirthDate =
                date.getFullYear().toString().padStart(3, "0") +
              ("0" + (date.getMonth() + 1)).slice(-2) +
              ("0" + date.getDate()).slice(-2);
            // console.log("Modified Birth Date:", modifiedBirthDate);

            // this.registrationForm.bday= res.data.data.regPersonList[i].birthDate;
            this.registrationForm.bday = modifiedBirthDate;
          } else {
            this.registrationForm.bday = selectedMember.birthDate;
          }
          // this.registrationForm.patData = "";
          // this.registrationForm.bday = "";
        }
        if (
          selectedMember.lineId != null &&
          selectedMember.patName === "本人"
        ) {
          console.log("本人 yes and line is not");
          this.showFields = true;
        }

        if (
          selectedMember.lineId !== null &&
          selectedMember.representRelationship === "2" &&
          selectedMember.patName !== "本人" &&
          selectedMember.patName !== "新增家屬" &&
          selectedMember.patName !== "新增朋友"
        ) {
          this.showFields = true;
          return;
        }
        if (
          selectedMember.lineId !== null &&
          selectedMember.representRelationship === "3" &&
          selectedMember.patName !== "本人" &&
          selectedMember.patName !== "新增家屬" &&
          selectedMember.patName !== "新增朋友"
        ) {
          this.showFields = true;
          return;
        }
        if (selectedMember.lineId != null && selectedMember.patName != "本人") {
          this.fullRegForm = true;
          this.showFields = false;
          if (String(this.value1) === "99") {
            this.diabledFields = true;
          }
        }
        this.errBday = "";
        this.errID = "";
        this.errMobile = "";
      }
    },
    // FIRST TAB REGISTATION SUBMIT BUTTON
    onSubmitBtnClickData() {
      const dataa = {
        ...this.registrationDataTemp,
        idType: this.value ? this.value : 1,
        representId: this.identification,
        birthDate: this.bday,
      };
      let isValid = true;
      if (dataa.idType === 1 || dataa.idType === 99) {
        if (!this.checkTwBirthdate(dataa.birthDate)) {
          // this.setError('格式錯誤');
          this.errBday = "格式錯誤";
          isValid = false;
          console.log("this.errBday", this.errBday);
        } else {
          this.errBday = "";
        }
      } else if (dataa.idType === 5 || dataa.idType === 51) {
        if (!this.checkCommonEraBirthday(dataa.birthDate)) {
          this.errBday = "格式錯誤";
          isValid = false;
          console.log("this.errBday", this.errBday);
        } else {
          this.errBday = "";
        }
      }
      if (dataa.idType === 1) {
        if (!this.checkTwID(dataa.representId)) {
          this.errID = "格式錯誤";
          isValid = false;
          console.log("this.errID", this.errID);
        } else {
          this.errID = "";
        }
      }
      if (dataa.idType === 5) {
        if (!this.checkResidenceNo(dataa.representId)) {
          this.errID = "格式錯誤";
          isValid = false;
          console.log("this.errID", this.errID);
        } else {
          this.errID = "";
        }
      }
      console.log(dataa);
      if (isValid) {
        axios
          .post(`${apiConfig.baseUrl}/outGetChrbasOrWebRegRecords`, {
            ...dataa,
            tenantId: apiConfig.commonParams.tenantId,
            tenantDbConnectionString:
              apiConfig.commonParams.tenantDbConnectionString,
            pass: "Kumar",
            userId: "webapp",
            representIdType: dataa.idType.toString(),
          })
          .then(async (res) => {
            if (res.data.code === 400) {
              const result = await Swal.fire({
                title: res.data.msg,
                showCloseButton: true,
                // showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: "確認",
                // cancelButtonText: "否",
              });
            } else {
              this.errBday = "";
              this.errID = "";
              this.fullRegForm = true;
              this.showRegistrationForm = true;
              this.isRegistrationForm = false;
              this.members = res.data.data.regPersonList.map((item: any) => ({
              name: item.patName,
              code: item.representRelationship,
            }));
              this.regPersonList = res.data.data.regPersonList;
              for (let i = 0; i < res.data.data.regPersonList.length; i++) {
              if (res.data.data.regPersonList[0].fvRvFlag == "F") {
                this.showFields = false;
                this.registrationForm.regPerson = this.members.find(
                    (i: any) => i.name === "本人"
                );
                if (
                    res.data.data.regPersonList[0].birthDate.length >= 7 &&
                    (res.data.data.regPersonList[0].idType === "1" ||
                        res.data.data.regPersonList[0].idType === "99")
                ) {
                  const date = new Date(
                      res.data.data.regPersonList[0].birthDate.substring(0, 4),
                      parseInt(
                          res.data.data.regPersonList[0].birthDate.substring(4, 6)
                      ) - 1,
                      res.data.data.regPersonList[0].birthDate.substring(6, 8)
                  );
                  date.setFullYear(date.getFullYear() - 1911);
                  const modifiedBirthDate =
                      date.getFullYear().toString().padStart(3, "0") +
                      ("0" + (date.getMonth() + 1)).slice(-2) +
                      ("0" + date.getDate()).slice(-2);
                  this.registrationForm.bday = modifiedBirthDate;
                }
                this.registrationForm.patData =
                    res.data.data.regPersonList[0].patData;
                this.value1 = res.data.data.regPersonList[0].idType;
                if (this.value1 === "1") {
                  this.registrationForm.idType = "身分證號";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "99") {
                  this.registrationForm.idType = "病歷號";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "51") {
                  this.registrationForm.idType = "護照號碼";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "5") {
                  this.registrationForm.idType = "居留證號碼";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
              } else if (res.data.data.regPersonList[0].fvRvFlag == "R") {
                console.log(
                    "res.data.data.regPersonList[i].fvRvFlag",
                    res.data.data.regPersonList[0].fvRvFlag
                );
                // hide this area and lock idType
                this.showFields = true;
                this.registrationForm.regPerson = this.members.find(
                    (i: any) => i.name === "本人"
                );
                if (
                    res.data.data.regPersonList[0].birthDate.length >= 7 &&
                    (res.data.data.regPersonList[0].idType === "1" ||
                        res.data.data.regPersonList[0].idType === "99")
                ) {
                  const date = new Date(
                      res.data.data.regPersonList[0].birthDate.substring(0, 4),
                      parseInt(
                          res.data.data.regPersonList[0].birthDate.substring(4, 6)
                      ) - 1,
                      res.data.data.regPersonList[0].birthDate.substring(6, 8)
                  );
                  date.setFullYear(date.getFullYear() - 1911);
                  const modifiedBirthDate =
                      date.getFullYear().toString().padStart(3, "0") +
                      ("0" + (date.getMonth() + 1)).slice(-2) +
                      ("0" + date.getDate()).slice(-2);
                  this.registrationForm.bday = modifiedBirthDate;
                }
                this.registrationForm.patData =
                    res.data.data.regPersonList[0].patData;
                this.value1 = res.data.data.regPersonList[0].idType;
                if (this.value1 === "1") {
                  this.registrationForm.idType = "身分證號";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "99") {
                  this.registrationForm.idType = "病歷號";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "51") {
                  this.registrationForm.idType = "護照號碼";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "5") {
                  this.registrationForm.idType = "居留證號碼";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
              }
              if (
                  res.data.data.regPersonList[0].fvRvFlag == "F" &&
                  res.data.data.regPersonList[0].lineId == null &&
                  res.data.data.regPersonList[0].patData != null &&
                  res.data.data.regPersonList[0].birthDate != null
              ) {
                if (
                    res.data.data.regPersonList[i].birthDate.length >= 7 &&
                    (res.data.data.regPersonList[i].idType === "1" ||
                        res.data.data.regPersonList[i].idType === "99")
                ) {
                  const date = new Date(
                      res.data.data.regPersonList[0].birthDate.substring(0, 4),
                      parseInt(
                          res.data.data.regPersonList[0].birthDate.substring(4, 6)
                      ) - 1,
                      res.data.data.regPersonList[0].birthDate.substring(6, 8)
                  );
                  date.setFullYear(date.getFullYear() - 1911);
                  const modifiedBirthDate =
                      date.getFullYear().toString().padStart(3, "0") +
                      ("0" + (date.getMonth() + 1)).slice(-2) +
                      ("0" + date.getDate()).slice(-2);
                  // this.registrationForm.bday = modifiedBirthDate;
                } else {
                  this.registrationForm.bday = res.data.data.regPersonList[i].birthDate;
                }
                this.value1 = res.data.data.regPersonList[0].idType;
                if (this.value1 === "1") {
                  this.registrationForm.idType = "身分證號";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "99") {
                  this.registrationForm.idType = "病歷號";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "51") {
                  this.registrationForm.idType = "護照號碼";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                if (this.value1 === "5") {
                  this.registrationForm.idType = "居留證號碼";
                  console.log(
                      "this.registrationForm.idType",
                      this.registrationForm.idType
                  );
                }
                // this.registrationForm.regPerson = this.members[0].name;
                this.registrationForm.regPerson =
                    res.data.data.regPersonList[0].patName;
                this.members = res.data.data.regPersonList.map((item: any) => ({
                  name: item.patName,
                  code: item.representRelationship,
                }));
                this.registrationForm.regPerson = this.members.find(
                    (i: any) => i.name === "本人"
                );
              }
            }
            }
          });
      }
    },
    clearError1(errorProperty: string) {
      (this as any)[errorProperty]= "";
    },
    async confirmRegistration() {
      const selectedMember = this.regPersonList.find(
        (member: any) => member.patName === this.registrationForm.regPerson.name
      );
      if (!selectedMember) {
        this.showFancyConfirmDialogForDropDown("請選擇 本人／家屬／朋友");
      }
      // console.log("this.regPersonList",selectedMember);
      let representRelationship = "";
      let regData = {};
      let idType = null;
      let uiRepresentBirthDate = null;
      let representIdType = null;
      // this.registrationForm.idType=this.value.toString();
      if (
        selectedMember.lineId === null &&
        selectedMember.patName != "本人" &&
        selectedMember.fvRvFlag === "R" &&
        (selectedMember.representRelationship === "2" ||
          selectedMember.representRelationship === "3")
      ) {
        console.log('1')
        if (this.value1) {
          idType = this.value1.toString();
        } else {
          idType = selectedMember.idType;
        }
        if (
          selectedMember.representRelationship == "2" ||
          selectedMember.representRelationship == "3"
        ) {
          representIdType = this.representIdType.toString();
          uiRepresentBirthDate=this.bday;
        } else {
          representIdType = idType;
        }
      
        if (idType === "5" || idType === "51" && selectedMember.representRelationship === "1") {
          if(selectedMember.birthDate){
             uiRepresentBirthDate = selectedMember.birthDate;
          }
          uiRepresentBirthDate = this.regPersonList[0].birthDate;
        } else {
          // uiRepresentBirthDate = "0820101";
        }
        if (selectedMember.representRelationship === "1") {
          uiRepresentBirthDate = this.registrationForm.bday;
        }
        if(selectedMember.birthDate == null){
          if(representIdType == "1" || representIdType == "99"){
          console.log("selectedMember.idType",selectedMember.idType)
          if(this.regPersonList[0].birthDate.length >= 7){
               const date = new Date(
                   this.regPersonList[0].birthDate.substring(0, 4),
                    parseInt(
                      this.regPersonList[0].birthDate.substring(4, 6)
                    ) - 1,
                    this.regPersonList[0].birthDate.substring(6, 8)
                  );
                  date.setFullYear(date.getFullYear() - 1911);
                  const modifiedBirthDate =
                      date.getFullYear().toString().padStart(3, "0") +
                    ("0" + (date.getMonth() + 1)).slice(-2) +
                    ("0" + date.getDate()).slice(-2);
                    uiRepresentBirthDate=modifiedBirthDate;
          }       
         }
          }
         regData = {
          opdDate: this.tempDataForLastRegistration.opdDate,
          docCode: this.tempDataForLastRegistration.docCode,
          shiftNo: this.tempDataForLastRegistration.shiftNo,
          idType: idType,
          fvRvFlag: selectedMember.fvRvFlag,
          representRelationship: representRelationship
            ? representRelationship
            : selectedMember.representRelationship,
          pass: "Kumar",
          patData: selectedMember.patData ? selectedMember.patData : null,
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          patName: null,
          sexType: null,
          birthDate: uiRepresentBirthDate,
          mobile: null,
          addrName: selectedMember.addrName ? selectedMember.addrName : null,
          webRegCode: selectedMember.webRegCode
            ? selectedMember.webRegCode
            : null,
          lineId: selectedMember.lineId ? selectedMember.lineId : null,
          representId: this.regPersonList[0].patData
            ? this.regPersonList[0].patData
            : this.registrationForm.patData,
          // uiRepresentBirthDate: uiRepresentBirthDate
          //   ? uiRepresentBirthDate
          //   : this.regPersonList[0].birthDate,
          uiRepresentBirthDate: uiRepresentBirthDate,
          representIdType: this.regPersonList[0].idType,
        };
      }
      else if (
        selectedMember.lineId === null &&
        selectedMember.patName != "本人" &&
        (selectedMember.representRelationship === "2" ||
          selectedMember.representRelationship === "3")
      ) {
        console.log('2')
        if (this.value1) {
          idType = this.value1.toString();
        } else {
          idType = selectedMember.idType;
        }
        if (
          selectedMember.representRelationship == "2" ||
          selectedMember.representRelationship == "3"
        ) {
          representIdType = this.representIdType.toString();
          uiRepresentBirthDate = this.bday;
        } else {
          representIdType = idType;
        }
        if (selectedMember.representRelationship === "1") {
          uiRepresentBirthDate = this.registrationForm.bday;
        } else {
          // uiRepresentBirthDate = "0820101";
        }
        regData = {
          opdDate: this.tempDataForLastRegistration.opdDate,
          docCode: this.tempDataForLastRegistration.docCode,
          shiftNo: this.tempDataForLastRegistration.shiftNo,
          idType: idType,
          fvRvFlag: selectedMember.fvRvFlag,
          representRelationship: representRelationship
            ? representRelationship
            : selectedMember.representRelationship,
          pass: "Kumar",
          patData: this.registrationForm.patData
            ? this.registrationForm.patData
            : selectedMember.patData,
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          patName: this.registrationForm.patientName,
          sexType: this.registrationForm.gender,
          birthDate: this.registrationForm.bday,
          mobile: this.registrationForm.mobile,
          addrName: this.registrationForm.addr,
          webRegCode: selectedMember.webRegCode
            ? selectedMember.webRegCode
            : null,
          lineId: selectedMember.lineId ? selectedMember.lineId : null,
          // representId:this.registrationForm.patData,
          representId: this.regPersonList[0].patData
            ? this.regPersonList[0].patData
            : this.registrationForm.patData,
          uiRepresentBirthDate: this.bday ? this.bday : this.registrationForm.bday,
          representIdType: this.regPersonList[0].idType,
        }
      }
      else if (selectedMember.lineId === null && selectedMember.fvRvFlag === "R") {
        console.log('3')
        {
          if (this.value1) {
          idType = this.value1.toString();
        } else {
          idType = selectedMember.idType;
        }
      
        if (idType === "5" || idType === "51" && selectedMember.representRelationship === "1") {
          uiRepresentBirthDate = selectedMember.birthDate;
        } else {
          uiRepresentBirthDate = this.registrationForm.bday;
        }
        if(selectedMember.birthDate == null){
          if(representIdType == "1" || representIdType == "99"){
          console.log("selectedMember.idType",selectedMember.idType)
          if(this.regPersonList[0].birthDate.length >= 7){
               const date = new Date(
                   this.regPersonList[0].birthDate.substring(0, 4),
                    parseInt(
                      this.regPersonList[0].birthDate.substring(4, 6)
                    ) - 1,
                    this.regPersonList[0].birthDate.substring(6, 8)
                  );
                  date.setFullYear(date.getFullYear() - 1911);
                  const modifiedBirthDate =
                      date.getFullYear().toString().padStart(3, "0") +
                    ("0" + (date.getMonth() + 1)).slice(-2) +
                    ("0" + date.getDate()).slice(-2);
                    uiRepresentBirthDate=modifiedBirthDate;
          }       
         }
          }
        //  if (selectedMember.representRelationship === '1') {
        //   uiRepresentBirthDate = this.registrationForm.bday;
        // } else {
        //   uiRepresentBirthDate = "0820101";
        // }
        regData = {
          opdDate: this.tempDataForLastRegistration.opdDate,
          docCode: this.tempDataForLastRegistration.docCode,
          shiftNo: this.tempDataForLastRegistration.shiftNo,
          idType: idType,
          fvRvFlag: selectedMember.fvRvFlag,
          representRelationship: representRelationship
            ? representRelationship
            : selectedMember.representRelationship,
          pass: "Kumar",
          patData: selectedMember.patData ? selectedMember.patData : null,
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          patName: null,
          sexType: null,
          birthDate: uiRepresentBirthDate,
          mobile: null,
          addrName: selectedMember.addrName ? selectedMember.addrName : null,
          webRegCode: selectedMember.webRegCode
            ? selectedMember.webRegCode
            : null,
          lineId: selectedMember.lineId ? selectedMember.lineId : null,
          representId: this.regPersonList[0].patData
            ? this.regPersonList[0].patData
            : this.registrationForm.patData,
          // uiRepresentBirthDate: uiRepresentBirthDate
          //   ? uiRepresentBirthDate
          //   : this.regPersonList[0].birthDate,
          uiRepresentBirthDate: uiRepresentBirthDate,
          representIdType: this.regPersonList[0].idType,
        };
        }
      } 
       else if (
        selectedMember.lineId === null &&
        selectedMember.patName === "本人"
      ) {
        let representId=null;
        if (this.value1) {
          idType = this.value1.toString();
        } else {
          idType = selectedMember.idType;
        }

         if (
          selectedMember.representRelationship == "2" ||
          selectedMember.representRelationship == "3"
        ) {
          representIdType = this.representIdType.toString();
          representId = this.identification;
          uiRepresentBirthDate = this.bday;
        } else {
          representIdType = idType;
        }

        if (selectedMember.representRelationship === "1") {
          uiRepresentBirthDate = this.registrationForm.bday;
        } else {
          uiRepresentBirthDate = "0820101";
        }

        console.log("uiRepresentBirthDate", uiRepresentBirthDate);
        console.log("representIdType", representIdType);
        console.log("representId", representId);

        regData = {
          opdDate: this.tempDataForLastRegistration.opdDate,
          docCode: this.tempDataForLastRegistration.docCode,
          shiftNo: this.tempDataForLastRegistration.shiftNo,
          idType: idType,
          fvRvFlag: selectedMember.fvRvFlag,
          representRelationship: representRelationship
            ? representRelationship
            : selectedMember.representRelationship,
          pass: "Kumar",
          patData: this.registrationForm.patData
            ? this.registrationForm.patData
            : selectedMember.patData,
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          patName: this.registrationForm.patientName,
          sexType: this.registrationForm.gender,
          birthDate: this.registrationForm.bday,
          mobile: this.registrationForm.mobile,
          addrName: this.registrationForm.addr,
          webRegCode: selectedMember.webRegCode
            ? selectedMember.webRegCode
            : null,
          lineId: selectedMember.lineId ? selectedMember.lineId : null,
          representId: this.registrationForm.patData,
          uiRepresentBirthDate: uiRepresentBirthDate,
          representIdType: idType,
        };
      } else if (
        selectedMember.lineId != null &&
        selectedMember.patName === "本人"
      ) {
        if (this.value1) {
          idType = this.value1.toString();
        } else {
          idType = selectedMember.idType;
        }
        regData = {
          opdDate: this.tempDataForLastRegistration.opdDate,
          docCode: this.tempDataForLastRegistration.docCode,
          shiftNo: this.tempDataForLastRegistration.shiftNo,
          idType: idType,
          fvRvFlag: selectedMember.fvRvFlag,
          representRelationship: representRelationship
            ? representRelationship
            : selectedMember.representRelationship,
          pass: "Kumar",
          patData: selectedMember.patData ? selectedMember.patData : null,
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          patName: null,
          sexType: null,
          birthDate: null,
          mobile: null,
          addrName: selectedMember.addrName ? selectedMember.addrName : null,
          webRegCode: selectedMember.webRegCode
            ? selectedMember.webRegCode
            : null,
          lineId: selectedMember.lineId ? selectedMember.lineId : null,
          representId: selectedMember.representId
            ? selectedMember.representId
            : null,
          uiRepresentBirthDate: null,
        };
      } else if (
        selectedMember.lineId != null &&
        selectedMember.patName === "家屬 (新增家屬)"
      ) {
        console.log(
          'selectedMember.lineId != null && selectedMember.patName === "家屬 (新增家屬)"'
        );
        if (this.value1) {
          idType = this.value1.toString();
        } else {
          idType = selectedMember.idType;
        }
        regData = {
          opdDate: this.tempDataForLastRegistration.opdDate,
          docCode: this.tempDataForLastRegistration.docCode,
          shiftNo: this.tempDataForLastRegistration.shiftNo,
          idType: idType,
          fvRvFlag: selectedMember.fvRvFlag,
          representRelationship: representRelationship
            ? representRelationship
            : selectedMember.representRelationship,
          pass: "Kumar",
          patData: selectedMember.patData ? selectedMember.patData : null,
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          patName: null,
          sexType: null,
          birthDate: null,
          mobile: null,
          addrName: selectedMember.addrName ? selectedMember.addrName : null,
          webRegCode: selectedMember.webRegCode
            ? selectedMember.webRegCode
            : null,
          lineId: selectedMember.lineId ? selectedMember.lineId : null,
          representId: selectedMember.representId
            ? selectedMember.representId
            : null,
          uiRepresentBirthDate: null,
        };
      } else if (
        selectedMember.lineId != null &&
        selectedMember.patName != "本人"
      ) {
        console.log(
          'selectedMember.lineId != null && selectedMember.patName != "本人"'
        );
        if (this.value1) {
          idType = this.value1.toString();
        } else {
          idType = selectedMember.idType;
        }
        regData = {
          opdDate: this.tempDataForLastRegistration.opdDate,
          docCode: this.tempDataForLastRegistration.docCode,
          shiftNo: this.tempDataForLastRegistration.shiftNo,
          idType: idType,
          fvRvFlag: selectedMember.fvRvFlag,
          representRelationship: representRelationship
            ? representRelationship
            : selectedMember.representRelationship,
          pass: "Kumar",
          patData: selectedMember.patData
            ? selectedMember.patData
            : this.registrationForm.patData,
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
          sexType: this.registrationForm.gender,
          birthDate: this.registrationForm.bday,
          mobile: this.registrationForm.mobile,
          patName: this.registrationForm.patientName,
          addrName: this.registrationForm.addr,
          webRegCode: selectedMember.webRegCode
            ? selectedMember.webRegCode
            : null,
          lineId: selectedMember.lineId ? selectedMember.lineId : null,
          representId: selectedMember.representId
            ? selectedMember.representId
            : null,
          uiRepresentBirthDate: null,
        };
      }
      console.log("pass data into registration", regData);

      let isValid = true;
      if (
        selectedMember.lineId != null &&
        selectedMember.representRelationship === "2" &&
        (selectedMember.patName != "本人" ||
          selectedMember.patName != "新增家屬" ||
          selectedMember.patName != "新增朋友")
      ) {
        // console.log("is valid true and re 2")
        // isValid = true;
        if (this.showFields == false) {
          if (idType === "1" || idType === "99") {
            if (!this.checkTwBirthdate(this.registrationForm.bday)) {
              this.errBday = "格式錯誤";
              isValid = false;
              console.log("1 or 99", isValid);
            }
          } else if (idType === "5" || idType === "51") {
            if (!this.checkCommonEraBirthday(this.registrationForm.bday)) {
              this.errBday = "格式錯誤";
              isValid = false;
              console.log("5 or 51", isValid);
            }
          }

          if (idType === "1") {
            if (!this.checkTwID(this.registrationForm.patData)) {
              this.errID = "格式錯誤";
              isValid = false;
              console.log("1", isValid);
            }
          }
          if (idType === "5") {
            if (!this.checkResidenceNo(this.registrationForm.patData)) {
              this.errID = "格式錯誤";
              isValid = false;
              console.log("5", isValid);
            }
          }
          if (!this.validateMobileNumber(this.registrationForm.mobile)) {
            this.errMobile = "格式錯誤";
            isValid = false;
          }
        } else {
          isValid = true;
        }
      } else if (
        selectedMember.lineId != null &&
        selectedMember.representRelationship === "3" &&
        (selectedMember.patName != "本人" ||
          selectedMember.patName != "新增家屬" ||
          selectedMember.patName != "新增朋友")
      ) {
        // console.log("is valid true and re 3")
        // isValid = true;
        if (this.showFields == false) {
          if (idType === "1" || idType === "99") {
            if (!this.checkTwBirthdate(this.registrationForm.bday)) {
              this.errBday = "格式錯誤";
              isValid = false;
              console.log("1 or 99", isValid);
            }
          } else if (idType === "5" || idType === "51") {
            if (!this.checkCommonEraBirthday(this.registrationForm.bday)) {
              this.errBday = "格式錯誤";
              isValid = false;
              console.log("5 or 51", isValid);
            }
          }
          if (idType === "1") {
            if (!this.checkTwID(this.registrationForm.patData)) {
              this.errID = "格式錯誤";
              isValid = false;
              console.log("1", isValid);
            }
          }
          if (idType === "5") {
            if (!this.checkResidenceNo(this.registrationForm.patData)) {
              this.errID = "格式錯誤";
              isValid = false;
              console.log("5", isValid);
            }
          }
          if (!this.validateMobileNumber(this.registrationForm.mobile)) {
            this.errMobile = "格式錯誤";
            isValid = false;
          }
        } else {
          isValid = true;
        }
      } else if (
        selectedMember.fvRvFlag != "R" &&
        selectedMember.lineId == null
      ) {
        console.log("andar", this.registrationForm.bday);
        console.log("andar", this.registrationForm.patData);

        if (idType === "1" || idType === "99") {
          if (!this.checkTwBirthdate(this.registrationForm.bday)) {
            this.errBday = "格式錯誤";
            isValid = false;
            console.log("1 or 99", isValid);
          }
        } else if (idType === "5" || idType === "51") {
          if (!this.checkCommonEraBirthday(this.registrationForm.bday)) {
            this.errBday = "格式錯誤";
            isValid = false;
            console.log("5 or 51", isValid);
          }
        }

        if (idType === "1") {
          if (!this.checkTwID(this.registrationForm.patData)) {
            this.errID = "格式錯誤";
            isValid = false;
            console.log("1", isValid);
          }
        }
        if (idType === "5") {
          if (!this.checkResidenceNo(this.registrationForm.patData)) {
            this.errID = "格式錯誤";
            isValid = false;
            console.log("5", isValid);
          }
        }
        if (!this.validateMobileNumber(this.registrationForm.mobile)) {
          this.errMobile = "格式錯誤";
          isValid = false;
        }
      }
      if (isValid) {
        await axios
          .post(`${apiConfig.baseUrl}/uiRegCommitClinic`, regData)
          .then((response) => {
            //  console.log(response.data);
            if (
              response &&
              response.data &&
              response.data.msg &&
              response.data.msg.includes("掛號成功")
            ) {
              this.isSuccess = true;

              this.fullRegForm = false;

              this.regDetailAfterRegFormSuccessful = response.data.data;
              this.regDetailAfterRegFormSuccessfulFor1 = true;
              this.isSuccessFor1 = true;
            }
            if (response.data.code === 400) {
              this.showFancyConfirmDialogForDropDown(response.data.msg);
              this.registrationForm.idType = this.registrationForm.idType;
              this.value1 = this.value1;
            }
          });
        this.identification = "";
        this.bday = "";
      }
      // this.identification='';
      // this.bday='';
    },
    validateMobileNumber(mobileNumber: any) {
      var regex = /^[09]{2}[0-9]{8}$/;
      return regex.test(mobileNumber);
      // if(!a){
      //   this.errMobile='格式錯誤';
      //   this.registrationForm.mobile='';
      // }
    },
    // SECOND TAB CLICK API CALL FUNCTION
    async handleSecondTabClick() {
      this.selectedTab = 1
      this.regDetailAfterRegFormSuccessfulFor1 = false;
      this.isRegistrationForm = false;
      this.showRegistrationForm = false;
      this.isSuccess = false;
      this.isSuccessFor1 = false;
      this.isA = false;
      this.fullRegForm = false;
      this.errBday = "";
      this.errID = "";
      this.identification = "";
      this.bday = "";
      (this.registrationForm = {
        idType: "身分證號",
        regPerson: "",
        patData: "",
        patientName: "",
        gender: "M",
        bday: "",
        mobile: "",
        addr: "",
      }),
        await axios
          .post(`${apiConfig.baseUrl}/outGetClinicRegOpdSeqNo`, {
            pass: "Kumar",
            userId: "webapp",
            tenantId: apiConfig.commonParams.tenantId,
            tenantDbConnectionString:
              apiConfig.commonParams.tenantDbConnectionString,
          })
          .then((res) => {
            this.outGetClinicRegOpdSeqNoData = res.data.data;
            if (res.data.data) {
              this.isSuccess = true;
              this.isDataIsAvailableFor2 = false;
            }
            if (!res.data.data || res.data.data.length === 0 || res.data.code == 400) {
              this.isDataIsAvailableFor2 = true;
              this.isSuccess = false;
            }
          });
    },
    // ATTATCHMENT 1
    checkTwID(id: any) {
      var city = new Array(
        1,
        10,
        19,
        28,
        37,
        46,
        55,
        64,
        39,
        73,
        82,
        2,
        11,
        20,
        48,
        29,
        38,
        47,
        56,
        65,
        74,
        83,
        21,
        3,
        12,
        30
      );
      id = id.toUpperCase();
      if (id.search(/^[A-Z](1|2)\d{8}$/i) == -1) {
        return false;
      } else {
        id = id.split("");
        var total = city[id[0].charCodeAt(0) - 65];
        for (var i = 1; i <= 8; i++) {
          total += eval(id[i]) * (9 - i);
        }
        total += eval(id[9]);
        return total % 10 == 0;
      }
    },
    // ATTACHMENT 2
    checkResidenceNo(residenceNumber: any) {
      let numberStrArray = residenceNumber.split("");
      if (numberStrArray.length < 2) {
        return false;
      } else {
        let code = numberStrArray[1];
        switch (code) {
          case "A":
            code = "0";
            break;
          case "B":
            code = "1";
            break;
          case "C":
            code = "2";
            break;
          case "D":
            code = "3";
            break;
          case "8":
            break;
          case "9":
            break;
          default:
            code = "err";
            break;
        }
        if (code === "err") {
          return false;
        }
        numberStrArray.splice(1, 1, code);
        let newNumber: any = "";
        numberStrArray.forEach((item: any) => {
          newNumber += item;
        });
        let city = new Array(
          1,
          10,
          19,
          28,
          37,
          46,
          55,
          64,
          39,
          73,
          82,
          2,
          11,
          20,
          48,
          29,
          38,
          47,
          56,
          65,
          74,
          83,
          21,
          3,
          12,
          30
        );
        if (newNumber.search(/^[A-Z](0|1|2|3|8|9)\d{8}$/i) == -1) {
          return false;
        } else {
          newNumber = newNumber.split("");
          let total = city[newNumber[0].charCodeAt(0) - 65];
          for (let i = 1; i <= 8; i++) {
            total += eval(newNumber[i]) * (9 - i);
          }
          total += eval(newNumber[9]);
          return total % 10 == 0;
        }
      }
    },
    // ATTACHMENT 3
    checkTwBirthdate(birthDate: any) {
      return /^\d{3}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])$/.test(
        birthDate
      );
    },
    // ATTACHMENT 4
    checkCommonEraBirthday(birthDate: any) {
      return /^(1|2)(\d{3})(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])$/.test(
        birthDate
      );
    },
    // FORMAT TIME FOR SECOND TAB DOCTOR CARD
    formatTime(timeString: any) {
      if (timeString.length !== 4) {
        return "";
      }
      const hours = timeString.substring(0, 2);
      const minutes = timeString.substring(2);
      return `${hours}:${minutes}`;
    },
    // THIRD TAB CLICK API CALL FUNCTION
    async handleThirdTabClick() {
      this.selectedTab = 2
      this.regDetailAfterRegFormSuccessfulFor1 = false;
      this.showRegistrationForm = false;
      this.isRegistrationForm = false;
      this.isDoctorCardFor3 = false;
      this.isSuccesInfoForDoc3 = false;
      this.isRegistrationForm = false;
      this.showRegistrationForm = false;
      this.isSuccess = false;
      this.isSuccessFor1 = false;
      this.isA = false;
      this.fullRegForm = false;
      this.errBday = "";
      this.errID = "";
      this.identification = "";
      this.bday = "";
      this.registrationForm = {
        idType: "身分證號",
        regPerson: "",
        patData: "",
        patientName: "",
        gender: "M",
        bday: "",
        mobile: "",
        addr: "",
      };
      if (this.isLineId === "") {
        await axios
          .post(`${apiConfig.baseUrl}/uiGetClinicRegQueryPage`, {
            lineId: "",
            tenantId: apiConfig.commonParams.tenantId,
            tenantDbConnectionString:
              apiConfig.commonParams.tenantDbConnectionString,
          })
          .then((res) => {
            console.log("third", res);
            if (res.data.data) {
              this.LineboundedForCancellation = res.data.data.lineIdBounded;
              console.log(
                "this.LineboundedForCancellation",
                this.LineboundedForCancellation
              );
              if (this.LineboundedForCancellation === "N") {
                this.isCancellationRegForm = true;
                this.isDataIsAvailableFor3 = false;
              }
            } else if (!res.data.data || res.data.data.length === 0 || res.data.code == 400) {
              this.isDataIsAvailableFor3 = true;
              this.isCancellationRegForm = false;
            }
          });
      } else {
        await axios
          .post(`${apiConfig.baseUrl}/uiGetClinicRegQueryPage`, {
            lineId: this.isLineId,
            tenantId: apiConfig.commonParams.tenantId,
            tenantDbConnectionString:
              apiConfig.commonParams.tenantDbConnectionString,
          })
          .then((res) => {
            // console.log('third with lineid 654321',res.data.data);
            this.isDoctorCardFor3 = true;
            this.isCancellationRegForm = false;
            this.doctorDataFor3 = res.data.data;
            this.isDataIsAvailableFor3 = false;
            // console.log("this.doctorDataFor3",this.doctorDataFor3)
            if (!res.data.data || res.data.data.length === 0 || res.data.code == 400) {
              this.isDataIsAvailableFor3 = true;
              this.isCancellationRegForm = false;
              this.isDoctorCardFor3 = false;
            }
          });
      }
    },
    async handleFourthTabClick() {
      this.selectedTab = 3
      
    },
    async handleFifthTabClick() {
      this.selectedTab = 4
    },
    // THIRD TAB FORM SUBMIT BUTTON
    onSubmitQryAndCanceSubmit() {
      let idType = this.value ? this.value : 1;
      let patData = this.queryCancleForm.identification_documents;
      let birthDate = this.queryCancleForm.birthday;
      let isValid = true;

      if (idType === 1 || idType === 99) {
        if (!this.checkTwBirthdate(birthDate)) {
          // this.err = '生日格式錯誤';
          this.errBday = "格式錯誤";
          isValid = false;
          console.log("1 or 99", isValid);
        }
      } else if (idType === 5 || idType === 51) {
        if (!this.checkCommonEraBirthday(birthDate)) {
          this.errBday = "格式錯誤";
          isValid = false;
          console.log("5 or 51", isValid);
        }
      }

      if (idType === 1) {
        if (!this.checkTwID(patData)) {
          this.errID = "格式錯誤";
          isValid = false;
          console.log("1", isValid);
        }
      }
      if (idType === 5) {
        if (!this.checkResidenceNo(patData)) {
          this.errID = "格式錯誤";
          isValid = false;
          console.log("5", isValid);
        }
      }
      if (isValid) {
        let data = {
          birthDate: birthDate,
          idType: idType.toString(),
          pass: "Kumar",
          password: "",
          patData: patData,
          userId: "webapp",
          tenantId: apiConfig.commonParams.tenantId,
          tenantDbConnectionString:
            apiConfig.commonParams.tenantDbConnectionString,
        };
        axios
          .post(`${apiConfig.baseUrl}/outGetClinicRegRegbasic`, data)
          .then((res) => {
            console.log("vivek", res);
            if (res.data.data && res.data.data.length > 0) {
              this.isDataIsAvailableFor3 = false;
              // this.isCancellationRegForm=true;

              this.isDoctorCardFor3 = true;
              this.isCancellationRegForm = false;
              this.doctorDataFor3 = res.data.data;

              this.isSuccesInfoForDoc3 = true;
              this.isDataIsAvailableqqqFor3 = true;
            } else {
              this.isDataIsAvailableFor3 = true;
            }
            if (!res.data.data || res.data.data.length === 0) {
              // this.isCancellationRegForm=false;
              this.isDataIsAvailableFor3 = true;
              this.isDataIsAvailableqqqFor3 = true;
              this.isCancellationRegForm = false;
            }
          });
        this.queryCancleForm.identification_documents = "";
        this.queryCancleForm.birthday = "";
      }
    },
    // THIRD TAB FORM CANCLE BUTTON
    onQryCancle() {
      this.queryCancleForm.identification_documents = "";
      this.queryCancleForm.birthday = "";
      this.errBday = "";
      this.errID = "";
    },
    // FIRST TABLE REGISTRATION CANCLE
    cancleRegistration() {
      this.fullRegForm = false;
      this.showRegistrationForm = false;
      this.isRegistrationForm = false;
      this.isA = false;
      this.registrationForm = {
        idType: "身分證號",
        regPerson: "",
        patData: "",
        patientName: "",
        gender: "M",
        bday: "",
        mobile: "",
        addr: "",
      };
      this.errBday = "";
      this.errID = "";
      this.errMobile = "";
      this.identification = "";
      this.bday = "";
      this.handleFirstTabClick();
    },
    cancleFirstForm() {
      this.fullRegForm = false;
      this.showRegistrationForm = false;
      this.isRegistrationForm = false;
      this.isA = false;
      this.identification = "";
      this.bday = "";
      this.errBday = "";
      this.errID = "";
      this.handleFirstTabClick();
    },
    slotCompare(date: any, slot: any) {
      // console.log(date)
      var currentDT:any = new Date(); // This will give you the current date and time
      // var currentDT = 1696273254000; // This will give you the current date and time
      const currentDateString = currentDT.toISOString().split("T")[0];
      // console.log(currentDateString);
      // console.log("currentDT",currentDT);
      if (date == currentDateString) {
        currentDT = currentDT.valueOf();
        // Define time slots (with the same time for each day)
        var slot1StartTime = new Date(currentDT);
        slot1StartTime.setHours(8, 0, 0, 0);
        var slot1EndTime = new Date(currentDT);
        slot1EndTime.setHours(12, 30, 0, 0);

        var slot2StartTime = new Date(currentDT);
        slot2StartTime.setHours(15, 0, 0, 0);
        var slot2EndTime = new Date(currentDT);
        slot2EndTime.setHours(17, 59, 0, 0);

        var slot3StartTime = new Date(currentDT);
        slot3StartTime.setHours(18, 0, 0, 0);
        var slot3EndTime = new Date(currentDT);
        slot3EndTime.setHours(20, 30, 0, 0);

        // Convert time slots to epoch time (in milliseconds)
        var slot1StartTimeEpoch = slot1StartTime.getTime();
        var slot1EndTimeEpoch = slot1EndTime.getTime();
        var slot2StartTimeEpoch = slot2StartTime.getTime();
        var slot2EndTimeEpoch = slot2EndTime.getTime();
        var slot3StartTimeEpoch = slot3StartTime.getTime();
        var slot3EndTimeEpoch = slot3EndTime.getTime();
        // Check if currentDT falls within the specified time slot for the given slotID
        if (slot == "1") {
          // console.log("slot1StartTimeEpoch",slot1StartTimeEpoch)
          // console.log("currentDT",currentDT)
          if (
            currentDT >= slot1StartTimeEpoch &&
            currentDT <= slot1EndTimeEpoch
          ) {
            // console.log("Current time is within Slot 1.");
            this.isisis = false;
            return false;
          } else {
            if (
              currentDT < slot1StartTimeEpoch &&
              currentDT < slot2StartTimeEpoch &&
              currentDT < slot3StartTimeEpoch
            ) {
              // console.log("small small");
              this.isisis = false;
              return false;
            } else if (
              currentDT < slot2StartTimeEpoch &&
              currentDT < slot3StartTimeEpoch &&
              currentDT >= slot1StartTimeEpoch &&
              currentDT <= slot1EndTimeEpoch
            ) {
              this.isisis = false;
              return false;
            }

            // console.log("Current time is NOT within Slot 1.");
            this.isisis = true;
            return true;
          }
        }
        if (slot == "2") {
          if (
            currentDT >= slot2StartTimeEpoch &&
            currentDT <= slot2EndTimeEpoch
          ) {
            // console.log("Current time is within Slot 2.");
            this.isisis = false;
            return false;
          } else {
            // console.log("Current time is NOT within Slot 2.");
            if (
              currentDT < slot1StartTimeEpoch &&
              currentDT < slot2StartTimeEpoch &&
              currentDT < slot3StartTimeEpoch
            ) {
              // console.log("small small");
              this.isisis = false;
              return false;
            } else if (
              currentDT > slot1StartTimeEpoch &&
              currentDT < slot3StartTimeEpoch
            ) {
              this.isisis = false;
              return false;
            }

            this.isisis = true;
            return true;
          }
        }
        if (slot == "3") {
          // console.log("slot3StartTimeEpoch",slot3StartTimeEpoch)
          // console.log("slot3EndTimeEpoch",slot3EndTimeEpoch)
          // console.log("currentDT",currentDT)
          if (
            currentDT >= slot3StartTimeEpoch &&
            currentDT <= slot3EndTimeEpoch &&
            currentDT > slot1StartTimeEpoch
          ) {
            // console.log("Current time is within Slot 3.");
            this.isisis = false;
            return false;
          } else {
            // console.log("test",currentDT)
            // console.log("slot1StartTimeEpoch",slot1StartTimeEpoch)
            // console.log("slot2StartTimeEpoch",slot2StartTimeEpoch)
            if (
              currentDT < slot1StartTimeEpoch &&
              currentDT < slot2StartTimeEpoch &&
              currentDT < slot3StartTimeEpoch
            ) {
              // console.log("small small");
              this.isisis = false;
              return false;
            } else if (
              currentDT > slot1StartTimeEpoch &&
              currentDT > slot2StartTimeEpoch &&
              currentDT > slot3StartTimeEpoch
            ) {
              // console.log("big big");
              this.isisis = true;
              return true;
            } else if (
              currentDT > slot1StartTimeEpoch ||
              (currentDT >= slot3StartTimeEpoch &&
                currentDT <= slot3EndTimeEpoch) ||
              (currentDT < slot2StartTimeEpoch &&
                currentDT < slot3StartTimeEpoch)
            ) {
              this.isisis = false;
              return false;
            }
            this.isisis = true;
            return true;
          }
        }
      }
    },
  },
  data() {
    return {
      selectedTab:0 as number,
      representIdType: 0 as any,
      isisis: false,
      isHighlighted: true,
      activeIndex: 0,
      isA: false,
      weeks: [] as any[],
      apirespo: [] as any[],
      isPageAFor1: false,
      isPageBFor1: false,
      selectedDate: "",
      value: 1 as any,
      value1: 1 as any,
      cancelButtonClass: "",
      days: [] as any[],
      datePickr: null,
      ingredient: "身分證號",
      ingredient1: "身分證號",
      gender: "M",
      selectedMember: null,
      // members: [
      //     { name: '本人（我）', code: '1' },
      //     { name: '新增家屬', code: '2' },
      //     { name: '新增朋友', code: '3' },
      //     { name: '家屬（王大明）', code: '4' }
      // ],
      members: [],
      // imgPath: "http://techext-001-site79.itempurl.com/wp-admin/images/",
      imgPath: "https://iscomfort.smartclinics.tw/wp-content/uploads/",
      placeholder: {
        identification_documents: "格式：A123456789",
        identification_documents1: "看診人身分證字號",
        birthday: "生日格式：0800101",
        birthday1: "生日格式：0800101",
      },
      slotTimeArrList: [
        {
          leftLabel: "早",
          rightLabel: "診",
          slot: "",
        },
        {
          leftLabel: "午",
          rightLabel: "診",
          slot: "",
        },
        {
          leftLabel: "晚",
          rightLabel: "診",
          slot: "",
        },
      ],
      dailyDataList: [] as any[],
      registartionTemp: {},
      shiftTimeList: [],
      diabledFields: false,
      showFields: false,
      showRegistrationForm: false,
      radioFieldValue: 0,
      identification: "",
      bday: "",
      registrationDataTemp: {},
      errID: "",
      errBday: "",
      errMobile: "",
      isDisabled: false,
      outGetClinicRegOpdSeqNoData: [],
      LineboundedForCancellation: "",
      isRegistrationForm: false,
      isDoctorAvailable: false,
      isRegisteredInfoAvailable: false,
      queryCancleForm: {
        ingredientQryCancle: "身分證號",
        identification_documents: "",
        birthday: "",
      },
      isLineId: "",
      fullRegForm: false,
      isSuccess: false,
      isCancle: false,
      isSuccessFor1: false,
      isDataIsAvailableFor2: false,

      isCancellationRegForm: false,
      isDataIsAvailableFor3: false,
      isDataIsAvailableqqqFor3: false,
      isSuccesInfoForDoc3: false,
      isDoctorCardFor3: false,
      doctorDataFor3: [],
      regPersonList: [] as any[],

      registrationForm: {
        idType: "身分證號",
        regPerson: "",
        patData: "",
        patientName: "",
        gender: "M",
        bday: "",
        mobile: "",
        addr: "",
      } as any,
      tempDataForLastRegistration: {} as any,
      regDetailAfterRegFormSuccessful: {} as any,
      regDetailAfterRegFormSuccessfulFor1: false,
      dataList: [] as any[],
      dataListTemp: [] as any[],
      doctorDateForDesk: [] as any[],
    };
  },
});
</script>
<style>
</style>