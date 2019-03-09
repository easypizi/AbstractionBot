modules.define(
  "page-notfound",

  function(provide, bemDom) {
    provide(
      bemDom.declBlock(this.name, {
        onSetMod: {
          js: {
            inited: function() {}
          }
        }
      })
    );
  }
);
