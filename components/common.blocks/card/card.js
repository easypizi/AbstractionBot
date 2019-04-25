modules.define("card", ["i-bem-dom"], function(provide, bemDom) {
  provide(
    bemDom.declBlock(this.name, {
      onSetMod: {
        js: {
          inited: function() {
            let wrapper = this.findChildElem("wrapper");

            wrapper._domEvents().on("click", () => {
              window.open(wrapper.params.link);
            });
          }
        }
      }
    })
  );
});
