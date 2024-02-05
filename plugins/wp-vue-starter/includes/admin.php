<?php

namespace wp_vue_starter\includes;

class Admin
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'register_scripts_styles']);
    }

    public function register_scripts_styles()
    {
        $this->load_scripts();
        $this->load_styles();
    }

    public function load_scripts()
    {
        wp_register_script('wp-vue-manifest', WP_VUE_PLUGIN_URL . 'public/js/manifest.js', [], rand(), true);
        wp_register_script('wp-vue-vendor', WP_VUE_PLUGIN_URL . 'public/js/vendor.js', ['wp-vue-manifest'], rand(), true);
        wp_register_script('wp-vue-admin', WP_VUE_PLUGIN_URL . 'public/js/admin.js', ['wp-vue-vendor'], rand(), true);

        wp_enqueue_script('wp-vue-manifest');
        wp_enqueue_script('wp-vue-vendor');
        wp_enqueue_script('wp-vue-admin');

        wp_localize_script('wp-vue-admin', 'wpAdminLocalizer', [
            'adminUrl' => admin_url('/'),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'apiUrl' => home_url('/wp-json'),
            'test' => [
                "id" => 1,
                "text" => "Hello"
            ]
        ]);
    }

    public function load_styles()
    {
        wp_register_style('wp-vue-admin', WP_VUE_PLUGIN_URL . 'public/css/admin.css');

        wp_enqueue_style('wp-vue-admin');
    }

    public function admin_menu()
    {
        global $submenu;

        $capability = 'manage_options';
        $slug = 'wp-vue-starter';

        $hook = add_menu_page(
            __('WP Vue Starter', 'textdomain'),
            __('WP Vue Starter', 'textdomain'),
            $capability,
            $slug,
            [$this, 'menu_page_template'],
            'dashicons-heart'
        );

        if (current_user_can($capability)) {
            $submenu[$slug][] = [__('Home', 'textdomain'), $capability, 'admin.php?page=' . $slug . '#/'];
            $submenu[$slug][] = [__('Settings', 'textdomain'), $capability, 'admin.php?page=' . $slug . '#/settings'];
        }
    }

    public function init_hooks()
    {
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
    }

    public function enqueue_scripts()
    {
        wp_enqueue_style('wp-vue-admin');
        wp_enqueue_script('wp-vue-admin');
    }

    public function menu_page_template()
    {
        echo '<div class="wrap"><div id="wp-vue-admin-app"></div></div>';
    }
}