/*
 * All credits to  Maarten Baijs for tinyScrollbar plugin
 * mod by Manish
*/


(function( $ ){

    $.fn.myScrollBar = function( options ) {
        var defaultOptions={
            isHidden:false,
            afterWrap:function(){

            }
        }
        var options = $.extend({},defaultOptions,options);

        var hideScrollBar=function(which){

                    var scrollBar=$(which).find(".scrollbar");

                    scrollBar.hide();

                    $(which).hover(function(){
                        scrollBar.show();
                    }, function(){
                        scrollBar.hide();
                    });


        }

        this.each(function() {
            $this=$(this);
            var originalContent=$this.html();
            $this.empty();
            var scrollPart=$('<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>');
            var viewport=$("<div></div>").addClass("viewport");
            var overview=$("<div></div>").addClass("overview");

            viewport.html(overview);
            overview.html(originalContent);
            $this.prepend(scrollPart)
            $this.append(viewport);

            if(options.isHidden)
                {
                    hideScrollBar(this);
                }

            options.afterWrap.call(this);
            $this.tinyscrollbar(options);
        });


        return this;
    };
})( jQuery );
