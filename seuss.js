/*
 *  Project: seuss.js
 *  Description: it does just exactly as it means, no wiggles, no ziggles, no rotting ice creams 
 *  Author: John Vaghi
 *  License: 
 */

;(function ( $, window, undefined ) {

  // defaults once
  var pluginName = 'seuss',
      document = window.document,
      defaults = {
        color: true,
        auto: false,
        unSeuss: '.unSeuss'
      };

  // The actual plugin constructor
  function Plugin( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype.init = function () {
	
	var masterHTML = this.element.innerHTML,
		  element = this.element,
		  css,
      selectors = ['p','h1','h2','h3','h4','a'],
      selectorsLength = selectors.length;
  	
  	function findStyles(cssBuild){
  		var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	  	css = {
	  		'color' : color,
	  		'font-family' : 'Comic Sans MS, Arial'
	  	}
	  	return cssBuild;
  	}
  	

    for(var t = 0; t < selectorsLength; t++) { 
    	$(this.element).find(selectors[t]).each(function(index) {
      		findStyles(css);
       		$(this).css(css);
    	});	
    }
  	
  	$(this.options.unSeuss).click(function(){ $(element).html(masterHTML); });

  };


  // prevents against multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  }

}(jQuery, window));