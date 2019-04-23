/* eslint-disable no-undef */
modules.define(
  "gallery",

  ["i-bem-dom"],

  function(provide, bemDom) {
    provide(
      bemDom.declBlock(this.name, {
        onSetMod: {
          js: {
            inited: function() {
              let container = this.findChildElem("slides").domElem[0];
              let controls = this.findChildElem("controls").domElem[0];

              let slidesCount = this.params.slides;

              if (window.innerWidth < 600) {
                slidesCount = 1;
              } else if (window.innerWidth < 769) {
                slidesCount = 2;
              } else if (window.innerWidth < 1220) {
                slidesCount = 3;
              }

              setTimeout(() => {
                this.setMod("show");
              }, 100);

              tns({
                container: container,
                controlsContainer: controls,
                items: slidesCount,
                slideBy: 1,
                nav: false,
                loop: true,
                gutter: 0,
                edgePadding: 0,
                mouseDrag: true,
                touch: true,
                controlsText: ["", ""],
                rewind: true
                // autoplay: true
              });
            }
          }
        }
      })
    );
  }
);
