<?php

namespace wp_vue_starter\includes;

class Assets
{
    public function __construct()
    {
        if (is_admin()) {
            add_action('admin_enqueue_scripts', [$this, 'register'], 5);
        } else {
            add_action('wp_enqueue_scripts', [$this, 'register'], 5);
        }
    }

    public function register()
    {
        $this->register_scripts($this->get_scripts());
        $this->register_styles($this->get_styles());
    }

    public function register_scripts($scripts)
    {
        foreach ($scripts as $handle => $script) {
            $deps = isset($script['deps']) ? $script['deps'] : false;
            $in_footer = isset($script['in_footer']) ? $script['in_footer'] : false;
            $version = isset($script['version']) ? $script['version'] : WP_VUE_VERSION;

            wp_register_script($handle, $script['src'], $deps, $version, $in_footer);
        }
    }

    public function register_styles($styles)
    {
        foreach ($styles as $handle => $style) {
            $deps = isset($style['deps']) ? $style['deps'] : false;

            wp_register_style($handle, $style['src'], $deps, WP_VUE_VERSION);
        }
    }

    public function get_scripts()
    {
        $prefix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '.min' : '';

        $scripts = [
            'wp-vue-manifest' => [
                'src' => WP_VUE_PLUGIN_URL . '/public/js/manifest.js',
                'deps' => [],
                'version' => \filemtime(WP_VUE_PLUGIN_PATH . '/public/js/manifest.js'),
                'in_footer' => true
            ],
            'wp-vue-vendor' => [
                'src' => WP_VUE_PLUGIN_URL . '/public/js/vendor.js',
                'deps' => ['wp-vue-manifest'],
                'version' => \filemtime(WP_VUE_PLUGIN_PATH . '/public/js/vendor.js'),
                'in_footer' => true
            ],
            'wp-vue-admin' => [
                'src' => WP_VUE_PLUGIN_URL . '/public/js/admin.js',
                'deps' => ['wp-vue-vendor'],
                'version' => \filemtime(WP_VUE_PLUGIN_PATH . '/public/js/admin.js'),
                'in_footer' => true
            ],
            'wp-vue-frontend' => [
                'src' => WP_VUE_PLUGIN_URL . '/public/js/frontend.js',
                'deps' => ['jquery', 'wp-vue-vendor'],
                'version' => \filemtime(WP_VUE_PLUGIN_PATH . '/public/js/frontend.js'),
                'in_footer' => true
            ],
        ];

        return $scripts;
    }

    public function get_styles()
    {
        $styles = [
            'wp-vue-style' => [
                'src' => WP_VUE_PLUGIN_URL . '/public/css/style.css'
            ],
            'wp-vue-admin' => [
                'src' => WP_VUE_PLUGIN_URL . '/public/css/admin.css'
            ],
            'wp-vue-frontend' => [
                'src' => WP_VUE_PLUGIN_URL . '/public/css/frontend.css'
            ],
        ];

        return $styles;
    }
}