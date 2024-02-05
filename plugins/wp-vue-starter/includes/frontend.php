<?php

namespace wp_vue_starter\includes;

class Frontend
{
    public function __construct()
    {
        add_shortcode('wp-vue-frontend-app', [$this, 'render_frontend']);
    }

    public function render_frontend($atts, $content = '')
    {
//        wp_enqueue_style('wp-vue-frontend');
//        wp_enqueue_script('wp-vue-frontend');

        wp_register_script('wp-vue-manifest', WP_VUE_PLUGIN_URL . 'public/js/manifest.js', [], rand(), true);
        wp_register_script('wp-vue-vendor', WP_VUE_PLUGIN_URL . 'public/js/vendor.js', ['wp-vue-manifest'], rand(), true);
        wp_register_script('wp-vue-frontend', WP_VUE_PLUGIN_URL . 'public/js/frontend.js', ['wp-vue-vendor'], rand(), true);

        wp_enqueue_script('wp-vue-manifest');
        wp_enqueue_script('wp-vue-vendor');
        wp_enqueue_script('wp-vue-frontend');

//        wp_register_style('wp-vue-frontend', WP_VUE_PLUGIN_URL . 'public/css/frontend.css');
//        wp_enqueue_style('wp-vue-frontend');

        wp_register_style('wp-vue-primeflex', 'https://unpkg.com/primeflex/primeflex.css');
        wp_enqueue_style('wp-vue-primeflex');

        wp_register_style('wp-vue-primeicons', 'https://unpkg.com/primeicons/primeicons.css');
        wp_enqueue_style('wp-vue-primeicons');

        wp_register_style('wp-vue-primetheme', 'https://unpkg.com/primevue/resources/themes/mdc-light-indigo/theme.css');
        wp_enqueue_style('wp-vue-primetheme');

        wp_localize_script('wp-vue-frontend', 'wpFrontendLocalizer', [
            'adminUrl' => admin_url('/'),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'apiUrl' => home_url('/wp-json'),
            'devApiUrl' => home_url('index.php?rest_route='),
            'test' => [
                "id" => 1,
                "text" => "Hello Danish!"
            ]
        ]);

        $content .= '<div id="wp-vue-frontend-app"></div>';

        return $content;
    }
}