<?php
//echo "<script>window.location.replace('https://redirect-url-goes-here.com');</script>";
//echo "<script>console.log('Hello!')</script>";
get_header();
echo do_shortcode('[wp-vue-frontend-app]');
get_footer();