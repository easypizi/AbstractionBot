modules.define("list", function(provide, List) {
  provide(
    List.declMod(
      { modName: "type", modVal: "description" },
      {
        onSetMod: {
          js: {
            inited: function() {}
          }
        }
      }
    )
  );
});
