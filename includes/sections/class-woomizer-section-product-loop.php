<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://github.com/sofyansitorus
 * @since      1.1.0
 *
 * @package    Woomizer
 * @subpackage Woomizer/includes/sections
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.1.0
 * @package    Woomizer
 * @subpackage Woomizer/includes/sections
 * @author     Sofyan Sitorus <sofyansitorus@gmail.com>
 */
class Woomizer_Section_Product_Loop extends Woomizer_Section {

	/**
	 * Adding panel in WordPress customizer.
	 *
	 * @since 1.1.0
	 */
	protected function add_settings() {

		// Adding setting for woomizer_products_loop_add_to_cart_btn_text.
		$this->wp_customize->add_setting(
			'woomizer_products_loop_add_to_cart_btn_text'
		);
		$this->wp_customize->add_control(
			new Woomizer_Control_Divider(
				$this->wp_customize,
				'woomizer_products_loop_add_to_cart_btn_text',
				array(
					'label'   => 'Add to Cart Button Text',
					'section' => $this->get_section_id(),
				)
			)
		);

		// Adding setting for woomizer_products_loop_add_to_cart_btn_text_simple.
		$this->wp_customize->add_setting(
			'woomizer_products_loop_add_to_cart_btn_text_simple',
			array(
				'default'   => __( 'Add to Cart', 'woomizer' ),
				'transport' => 'postMessage',
				'type'      => 'theme_mod',
			)
		);
		$this->wp_customize->add_control(
			'woomizer_products_loop_add_to_cart_btn_text_simple',
			array(
				'label'   => __( 'Simple Product', 'woomizer' ),
				'section' => $this->get_section_id(),
			)
		);

		// Adding setting for woomizer_products_loop_add_to_cart_btn_text_variable.
		$this->wp_customize->add_setting(
			'woomizer_products_loop_add_to_cart_btn_text_variable',
			array(
				'default'   => __( 'Select options', 'woomizer' ),
				'transport' => 'postMessage',
				'type'      => 'theme_mod',
			)
		);
		$this->wp_customize->add_control(
			'woomizer_products_loop_add_to_cart_btn_text_variable',
			array(
				'label'   => __( 'Variable Product', 'woomizer' ),
				'section' => $this->get_section_id(),
			)
		);

		// Adding setting for woomizer_products_loop_add_to_cart_btn_text_grouped.
		$this->wp_customize->add_setting(
			'woomizer_products_loop_add_to_cart_btn_text_grouped',
			array(
				'default'   => __( 'View products', 'woomizer' ),
				'transport' => 'postMessage',
				'type'      => 'theme_mod',
			)
		);
		$this->wp_customize->add_control(
			'woomizer_products_loop_add_to_cart_btn_text_grouped',
			array(
				'label'   => __( 'Grouped Product', 'woomizer' ),
				'section' => $this->get_section_id(),
			)
		);
	}
}