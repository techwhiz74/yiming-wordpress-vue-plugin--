<?php
/**
 * @link            https://danishashraf.net/
 * @since           0.0.1
 * @package         wp-vue-starter
 *
 * Plugin Name: wp-vue-starter
 * Plugin URI: https://danishashraf.net/
 * Description:
 * Version: 0.0.1
 * Author: Danish Ashraf
 * Author URI: https://danishashraf.net/
 * License: ISC
 * Text-Domain: textdomain
 */

use wp_vue_starter\includes\admin;
use wp_vue_starter\includes\frontend;

if (!defined('ABSPATH')) exit(); // No direct access allowed

require_once 'vendor/autoload.php';

final class WPVueStarter
{
    const VERSION = '0.0.1';

    public function __construct()
    {
        $this->plugin_constants();
        register_activation_hook(__FILE__, [$this, 'activate']);
        register_deactivation_hook(__FILE__, [$this, 'deactivate']);
        add_action('plugins_loaded', [$this, 'init_plugin']);
    }

    public function plugin_constants()
    {
        define('WP_VUE_VERSION', self::VERSION);
        define('WP_VUE_PLUGIN_PATH', trailingslashit(plugin_dir_path(__FILE__)));
        define('WP_VUE_PLUGIN_URL', trailingslashit(plugins_url('', __FILE__)));
        define('WP_VUE_NONCE', 'b?le*;K7.T2jk_*(+3&[G[xAc8O~Fv)2T/Zk9N:GKBkn$piN0.N%N~X91VbCn@.4');
    }

    public static function init()
    {
        static $instance = false;

        if (!$instance) {
            $instance = new self();
        }

        return $instance;
    }

    public function activate()
    {
        $is_installed = get_option('wp_vue_is_installed');

        if (!$is_installed) {
            update_option('wp_vue_is_installed', time());
        }

        update_option('wp_vue_is_installed', WP_VUE_VERSION);
    }

    public function deactivate()
    {
        // On plugin deactivation
    }

    public function init_plugin()
    {
        new Admin();
        new Frontend();
    }
}

function wp_vue_starter()
{
    return WPVueStarter::init();
}

wp_vue_starter();