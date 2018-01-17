/**
 * This file adds some LIVE to the Theme Customizer live preview.
 */
(function ($) {

	"use strict";

	// Customizer live preview: woomizer_products_loop_add_to_cart_btn_text_simple
	wp.customize('woomizer_products_loop_add_to_cart_btn_text_simple', function (setting) {
		var $selector_simple = $('.product-type-simple .product_type_simple');
		$selector_simple.text(wp.customize.value('woomizer_products_loop_add_to_cart_btn_text_simple')());
		setting.bind(function (newVal) {
			$selector_simple.text(newVal);
		});
	});

	// Customizer live preview: woomizer_products_loop_add_to_cart_btn_text_variable
	wp.customize('woomizer_products_loop_add_to_cart_btn_text_variable', function (setting) {
		var $selector_variable = $('.product-type-variable .product_type_variable');
		$selector_variable.text(wp.customize.value('woomizer_products_loop_add_to_cart_btn_text_variable')());
		setting.bind(function (newVal) {
			$selector_variable.text(newVal);
		});
	});

	// Customizer live preview: woomizer_products_loop_add_to_cart_btn_text_grouped
	wp.customize('woomizer_products_loop_add_to_cart_btn_text_grouped', function (setting) {
		var $selector_grouped = $('.product-type-grouped .product_type_grouped');
		$selector_grouped.text(wp.customize.value('woomizer_products_loop_add_to_cart_btn_text_grouped')());
		setting.bind(function (newVal) {
			$selector_grouped.text(newVal);
		});
	});

	// Customizer live preview: woomizer_product_single_add_to_cart_btn_text
	wp.customize('woomizer_product_single_add_to_cart_btn_text', function (setting) {
		var $selector = $('.single-product .single_add_to_cart_button');
		$selector.text(wp.customize.value('woomizer_product_single_add_to_cart_btn_text')());
		setting.bind(function (newVal) {
			$selector.text(newVal);
		});
	});

	// Customizer live preview: woomizer_product_single_tab_description_visible
	wp.customize('woomizer_product_single_tab_description_visible', function (setting) {
		toggle_description_tab(wp.customize.value('woomizer_product_single_tab_description_visible')());
		setting.bind(function (newVal) {
			toggle_description_tab(newVal);
		});

		function toggle_description_tab(show) {
			var $tab_wrap = $('.woocommerce-tabs');
			if (show) {
				$tab_wrap.find('.description_tab').addClass('active').show();
				$tab_wrap.find('#tab-description').addClass('active').show();
			} else {
				$tab_wrap.find('.description_tab').removeClass('active').show();
				$tab_wrap.find('#tab-description').removeClass('active').show();
			}
		}
	});

	// Customizer live preview: woomizer_product_single_tab_additional_information_visible
	wp.customize('woomizer_product_single_tab_additional_information_visible', function (setting) {
		toggle_additional_information_tab(wp.customize.value('woomizer_product_single_tab_additional_information_visible')());
		setting.bind(function (newVal) {
			toggle_additional_information_tab(newVal);
		});

		function toggle_additional_information_tab(show) {
			var $tab_wrap = $('.woocommerce-tabs');
			if (show) {
				$tab_wrap.find('.additional_information_tab a').show().trigger('click');
			} else {
				$tab_wrap.find('.additional_information_tab').hide();
				$tab_wrap.find('#tab-additional_information').removeClass('active').show();
			}
		}
	});

})(jQuery);