window.FileVersions={"api/ApiRequestR.js":"e2e3d375","api/ApiRequestRDefs.js":"0747183d","api/api.js":"3ffb5ac4","cloudres/CrBundle.js":"6d7ba995","component/AwsDialog.js":"a0bd9410","component/Exporter.js":"f926d84e","component/StateStatus.js":"4c8550c4","component/Validation.js":"1107a8bf","component/jsonviewer/JsonDiffLib.js":"6a66427a","component/jsonviewer/JsonViewer.js":"aee76d98","component/jsonviewer/diff.js":"c48f397c","component/jsonviewer/jqUi.js":"61d7e808","component/jsonviewer/view.js":"3d847baf","component/sharedrescomp.js":"778bfba3","component/stateeditor/stateeditor.js":"b6c05411","ide/AppBundle.js":"4ac690d7","ide/config.js":"3bf05b61","ide/subviews/DebugTool.js":"9cc1f8e4","lib/aws.js":"76d9a768","lib/lib.js":"c183b278","nls/en-us/lang.js":"69203b9a","nls/lang.js":"3093b83a","nls/zh-cn/lang.js":"66a3214a","service/service.js":"56f473e0","service/stack_model.js":"6c6a0ea2","ui/UI.tour.js":"cd6624f9","ui/ui.js":"c378dd5b","user/main.js":"eb567167","vender/crypto-js/hmac-sha256.js":"c822cfb1","vender/handlebars/handlebars.js":"bec7085c","vender/jquery/jquery.1.0.js":"a202c669","vender/jquery/jquery.cookie.min.js":"35af54d1","vender/qunit/qunit.js":"302545f4","vender/requirejs/require.js":"374b3c99","vender/requirejs/requirelib.js":"35453d3b","vender/select2/select2.js":"a53745e4","vender/select2/select2.min.js":"f396992f","vender/select2/select2_locale_zh-CN.js":"6add3c52","vender/vender.js":"7851b2e7","workspaces/Dashboard.js":"0be830d3","workspaces/OpsEditor.js":"8cdc8c8f","workspaces/editor/PropertyPanel.js":"df273841","workspaces/editor/framework/DesignBundle.js":"2c419336","workspaces/editor/framework/util/DesignDebugger.js":"cb646641","workspaces/editor/property/acl/template/app.js":"1038cfbe","workspaces/editor/property/sgrule/template/app.js":"a7a2ae7d"};
(function() {
  (function() {
    var getCookie, hosts, location, p, s, scripts, version, _i, _len;
    if (!window) {
      return;
    }
    location = window.location;
    if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(location.hostname)) {
      console.error("VisualOps IDE can not be browsed with IP address.");
      return;
    }
    hosts = location.hostname.split(".");
    if (hosts.length >= 3) {
      window.MC_DOMAIN = hosts[hosts.length - 2] + "." + hosts[hosts.length - 1];
    } else {
      window.MC_DOMAIN = location.hostname;
    }
    window.MC_API_HOST = location.protocol + "//api." + window.MC_DOMAIN;
    window.language = window.version = "";
    if (location.hostname.toLowerCase().indexOf("visualops.io") >= 0 && location.protocol === "http:") {
      window.location = location.href.replace("http:", "https:");
      return;
    }
    getCookie = function(sKey) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    };
    if (!(getCookie('usercode') && getCookie('session_id'))) {
      p = window.location.pathname;
      if (p === "/") {
        p = window.location.hash.replace("#", "/");
      }
      if (p && p !== "/") {
        window.location.href = "/login?ref=" + p;
      } else {
        window.location.href = "/login";
      }
      return;
    }
    scripts = document.getElementsByTagName("script");
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      s = scripts[_i];
      version = s.getAttribute("data-main");
      if (version) {
        window.version = version.split("?")[1];
        break;
      }
    }
    if (window.version === '#{version}') {
      window.version = "dev";
    }
    window.language = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + "lang\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || "en-us";
    return null;
  })();

  require.config({
    baseUrl: '/',
    waitSeconds: 30,
    locale: language,
    urlArgs: "v=" + version,

    /* env:dev                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          env:dev:end */
    shim: {
      'underscore': {
        exports: '_'
      },
      'Meteor': {
        deps: ['underscore'],
        exports: 'Meteor'
      }
    },

    /* env:prod */
    bundles: {
      "vender/requirejs/requirelib": ["i18n"],
      "vender/vender": ["jquery", "backbone", "underscore", "handlebars", "sprintf", "Meteor", "crypto", "q", "svg"],
      "lib/lib": ["MC", "constant", "MC.canvas", 'MC.validate', "lib/handlebarhelpers", "event"],
      "ui/ui": ['UI.tooltip', 'UI.scrollbar', 'UI.bubble', 'UI.modal', 'UI.table', 'UI.tablist', 'UI.selectbox', 'UI.searchbar', 'UI.filter', 'UI.radiobuttons', 'UI.notification', 'UI.multiinputbox', 'UI.canvg', 'UI.sortable', 'UI.parsley', 'UI.errortip', 'UI.dnd', "jqpagination", 'jquerysort', "jqtimepicker", "UI.modalplus", "UI.nanoscroller"],
      "api/api": ["ApiRequest"],
      "service/service": ['base_model', 'state_model', 'keypair_model', 'instance_model', 'result_vo', 'stack_service', 'state_service', 'ami_service', 'ebs_service', 'instance_service', 'keypair_service', 'customergateway_service'],
      "component/Exporter": ["ThumbnailUtil", "JsonExporter"],
      "component/Validation": ["validation", "component/trustedadvisor/gui/main"],
      "component/StateStatus": ["state_status"],
      "component/AwsDialog": ["component/sgrule/SGRulePopup", "component/dbsbgroup/DbSubnetGPopup", "appAction", 'og_manage', 'og_manage_app', 'og_dropdown'],
      "component/stateeditor/stateeditor": [],
      "component/sharedrescomp": ['kp_dropdown', 'kp_manage', 'kp_upload', 'sns_dropdown', 'sns_manage', 'combo_dropdown', 'toolbar_modal', 'dhcp', 'snapshotManager', 'sslcert_manage', 'sslcert_dropdown', 'ResDiff', 'DiffTree', "rds_pg", "rds_snapshot"],
      "cloudres/CrBundle": ["CloudResources"],
      "ide/AppBundle": ["ide/Application", "Workspace", "OpsModel", "ide/Router"],
      "workspaces/Dashboard": [],
      "workspaces/editor/PropertyPanel": ["workspaces/editor/subviews/PropertyPanel"],
      "workspaces/editor/framework/DesignBundle": ["Design"],
      "workspaces/OpsEditor": []
    },
    bundleExcludes: {
      "component/AwsDialog": ["Design"],
      "component/stateeditor/stateeditor": ["Design"],
      "component/sharedrescomp": ["Design"],
      "component/Validation": ["Design"],
      "workspaces/editor/PropertyPanel": ["Design"],
      "workspaces/editor/framework/DesignBundle": [],
      "workspaces/editor/subviews/PropertyPanel": ["component/sgrule/SGRulePopup"]
    }

    /* env:prod:end */
  });

  requirejs.onError = function(err) {
    var i, _i, _len, _ref;
    err = err || {
      requireType: "timeout"
    };
    if (err.requireType === "timeout") {
      _ref = err.requireModules || [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        requirejs.undef(i);
      }
      return require(err.requireModules || [], function() {});
    } else {
      return console.error("[RequireJS Error]", err, err.stack);
    }
  };

  require(['ide/Application', "cloudres/CrBundle", "workspaces/Dashboard", "workspaces/OpsEditor", "ide/Router", "MC", "MC.canvas", 'lib/aws'], function(Application, CrBundle, Dashboard, OpsEditor, Router) {
    window.Router = new Router();
    window.OpsEditor = OpsEditor;
    return (new Application()).initialize().then(function() {
      window.Router.start();
      window.Dashboard = new Dashboard();
    });
  }, function(err) {
    err = err || {
      requireType: "timeout"
    };
    if (err.requireType === "timeout") {
      requirejs.onError = function() {};
      console.error("[RequireJS timeout] Reloading, error modules :", err.requireModules);
      window.location.reload();
    } else {
      console.error("[RequireJS Error]", err, err.stack);
    }
  });

}).call(this);
