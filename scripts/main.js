window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/12.0.0-1/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/12.0.0-1/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://www.newparkschool.ie/wp-includes/js/wp-emoji-release.min.js?ver=5.4.2",
  },
};

!(function (e, a, t) {
  let r,
    n,
    o,
    i,
    p = a.createElement("canvas"),
    s = p.getContext && p.getContext("2d");
  function c(e, t) {
    const a = String.fromCharCode;
    s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, e), 0, 0);
    const r = p.toDataURL();
    return (
      s.clearRect(0, 0, p.width, p.height),
      s.fillText(a.apply(this, t), 0, 0),
      r === p.toDataURL()
    );
  }
  function l(e) {
    if (!s || !s.fillText) return !1;
    switch (((s.textBaseline = "top"), (s.font = "600 32px Arial"), e)) {
      case "flag":
        return (
          !c(
            [127987, 65039, 8205, 9895, 65039],
            [127987, 65039, 8203, 9895, 65039]
          ) &&
          !c(
            [55356, 56826, 55356, 56819],
            [55356, 56826, 8203, 55356, 56819]
          ) &&
          !c(
            [
              55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128,
              56430, 56128, 56423, 56128, 56447,
            ],
            [
              55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128,
              56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447,
            ]
          )
        );
      case "emoji":
        return !c(
          [
            55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424,
            55356, 57340,
          ],
          [
            55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424,
            55356, 57340,
          ]
        );
    }
    return !1;
  }
  function d(e) {
    const t = a.createElement("script");
    (t.src = e),
      (t.defer = t.type = "text/javascript"),
      a.getElementsByTagName("head")[0].appendChild(t);
  }
  for (
    i = Array("flag", "emoji"),
      t.supports = { everything: !0, everythingExceptFlag: !0 },
      o = 0;
    o < i.length;
    o++
  )
    (t.supports[i[o]] = l(i[o])),
      (t.supports.everything = t.supports.everything && t.supports[i[o]]),
      "flag" !== i[o] &&
        (t.supports.everythingExceptFlag =
          t.supports.everythingExceptFlag && t.supports[i[o]]);
  (t.supports.everythingExceptFlag =
    t.supports.everythingExceptFlag && !t.supports.flag),
    (t.DOMReady = !1),
    (t.readyCallback = function () {
      t.DOMReady = !0;
    }),
    t.supports.everything ||
      ((n = function () {
        t.readyCallback();
      }),
      a.addEventListener
        ? (a.addEventListener("DOMContentLoaded", n, !1),
          e.addEventListener("load", n, !1))
        : (e.attachEvent("onload", n),
          a.attachEvent("onreadystatechange", function () {
            "complete" === a.readyState && t.readyCallback();
          })),
      (r = t.source || {}).concatemoji
        ? d(r.concatemoji)
        : r.wpemoji && r.twemoji && (d(r.twemoji), d(r.wpemoji)));
})(window, document, window._wpemojiSettings);

if (window.addthis_product === undefined) {
  window.addthis_product = "wpp";
}
if (window.wp_product_version === undefined) {
  window.wp_product_version = "wpp-6.2.7";
}
if (window.addthis_share === undefined) {
  window.addthis_share = {};
}
if (window.addthis_config === undefined) {
  window.addthis_config = {
    data_track_clickback: true,
    ignore_server_config: true,
    ui_atversion: 300,
  };
}
if (window.addthis_layers === undefined) {
  window.addthis_layers = {};
}
if (window.addthis_layers_tools === undefined) {
  window.addthis_layers_tools = [
    {
      sharetoolbox: {
        numPreferredServices: 5,
        counts: "one",
        size: "16px",
        style: "fixed",
        shareCountThreshold: 0,
        elements:
          ".addthis_inline_share_toolbox_below,.at-below-post,.at-below-post-page",
      },
    },
  ];
} else {
  window.addthis_layers_tools.push({
    sharetoolbox: {
      numPreferredServices: 5,
      counts: "one",
      size: "16px",
      style: "fixed",
      shareCountThreshold: 0,
      elements:
        ".addthis_inline_share_toolbox_below,.at-below-post,.at-below-post-page",
    },
  });
}
if (window.addthis_plugin_info === undefined) {
  window.addthis_plugin_info = {
    info_status: "enabled",
    cms_name: "WordPress",
    plugin_name: "Share Buttons by AddThis",
    plugin_version: "6.2.7",
    plugin_mode: "WordPress",
    anonymous_profile_id: "wp-bd0d45946c0fd41150fd13fe4d4d5bb5",
    page_info: { template: "pages", post_type: ["page", "hom_page"] },
    sharing_enabled_on_post_via_metabox: false,
  };
}
(function () {
  const first_load_interval_id = setInterval(function () {
    if (typeof window.addthis !== "undefined") {
      window.clearInterval(first_load_interval_id);
      if (
        typeof window.addthis_layers !== "undefined" &&
        Object.getOwnPropertyNames(window.addthis_layers).length > 0
      ) {
        window.addthis.layers(window.addthis_layers);
      }
      if (Array.isArray(window.addthis_layers_tools)) {
        for (i = 0; i < window.addthis_layers_tools.length; i++) {
          window.addthis.layers(window.addthis_layers_tools[i]);
        }
      }
    }
  }, 1000);
})();
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "//www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-NM5KGV");
const simcal_default_calendar = {
  ajax_url: "/wp-admin/admin-ajax.php",
  nonce: "897750f318",
  locale: "en_GB",
  text_dir: "ltr",
  months: {
    full: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    short: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  days: {
    full: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  meridiem: { AM: "AM", am: "am", PM: "PM", pm: "pm" },
};
