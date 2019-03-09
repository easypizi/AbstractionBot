modules.define("list", function(provide, List) {
  provide(
    List.declMod(
      { modName: "type", modVal: "bullets" },
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
