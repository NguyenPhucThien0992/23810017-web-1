(function () {
  var template = Handlebars.template,
    templates = (Handlebars.templates = Handlebars.templates || {});
  templates["about-template.hbs"] = template({
    1: function (container, depth0, helpers, partials, data) {
      var stack1,
        alias1 = container.lambda,
        alias2 = container.escapeExpression,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '        <h1 class="py-3">' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '</h1>\n        <div>\n          <img\n            src="' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "thumbpath") : depth0,
            depth0
          )
        ) +
        '"\n            alt="' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '"\n            class="float-start rounded-3 me-3"\n          />\n          <div class="text-black-50">\n            ' +
        ((stack1 = alias1(
          depth0 != null ? lookupProperty(depth0, "summary") : depth0,
          depth0
        )) != null
          ? stack1
          : "") +
        '\n          </div>\n          <a\n            href="#aboutus/' +
        alias2(
          alias1(depth0 != null ? lookupProperty(depth0, "id") : depth0, depth0)
        ) +
        '"\n            class="btn btn-link readmore py-0"\n            onclick="loadDetails(\'aboutus/' +
        alias2(
          alias1(depth0 != null ? lookupProperty(depth0, "id") : depth0, depth0)
        ) +
        "','details-template','content')\"\n          >Read more</a>\n        </div>\n"
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (stack1 = lookupProperty(helpers, "each").call(
        depth0 != null ? depth0 : container.nullContext || {},
        depth0 != null ? lookupProperty(depth0, "data") : depth0,
        {
          name: "each",
          hash: {},
          fn: container.program(1, data, 0),
          inverse: container.noop,
          data: data,
          loc: { start: { line: 1, column: 3 }, end: { line: 18, column: 15 } },
        }
      )) != null
        ? stack1
        : "";
    },
    useData: true,
  });
  templates["details-template.hbs"] = template({
    1: function (container, depth0, helpers, partials, data) {
      var stack1,
        alias1 = container.lambda,
        alias2 = container.escapeExpression,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '        <div class="container py-5 overflow-auto">\n          <h1 class="py-3">' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '</h1>\n          <img\n            src="' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "imagepath") : depth0,
            depth0
          )
        ) +
        '"\n            alt="' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '"\n            class="img-fluid float-start rounded-3 me-3"\n          />\n          <p>' +
        ((stack1 = alias1(
          depth0 != null ? lookupProperty(depth0, "description") : depth0,
          depth0
        )) != null
          ? stack1
          : "") +
        "</p>\n        </div>\n"
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (stack1 = lookupProperty(helpers, "each").call(
        depth0 != null ? depth0 : container.nullContext || {},
        depth0 != null ? lookupProperty(depth0, "data") : depth0,
        {
          name: "each",
          hash: {},
          fn: container.program(1, data, 0),
          inverse: container.noop,
          data: data,
          loc: { start: { line: 1, column: 5 }, end: { line: 11, column: 15 } },
        }
      )) != null
        ? stack1
        : "";
    },
    useData: true,
  });
  templates["our-team-template.hbs"] = template({
    1: function (container, depth0, helpers, partials, data) {
      var alias1 = container.lambda,
        alias2 = container.escapeExpression,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '          <div class="col">\n            <a\n              href="#team/' +
        alias2(
          alias1(depth0 != null ? lookupProperty(depth0, "id") : depth0, depth0)
        ) +
        '"\n              class="text-decoration-none"\n              onclick="loadDetails(\'team/' +
        alias2(
          alias1(depth0 != null ? lookupProperty(depth0, "id") : depth0, depth0)
        ) +
        "','details-template','content')\"\n            >\n              <img\n                src=\"" +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "thumbpath") : depth0,
            depth0
          )
        ) +
        '"\n                alt="' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '"\n                class="rounded-3 mb-3 img-fluid"\n              />\n              <h4 class="text-dark">' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '</h4>\n              <p class="text-black-50">\n                ' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "summary") : depth0,
            depth0
          )
        ) +
        "\n              </p>\n            </a>\n          </div>"
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '      <h1>Our Team</h1>\n      <div class="row">\n' +
        ((stack1 = lookupProperty(helpers, "each").call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0 != null ? lookupProperty(depth0, "data") : depth0,
          {
            name: "each",
            hash: {},
            fn: container.program(1, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 3, column: 8 },
              end: { line: 20, column: 25 },
            },
          }
        )) != null
          ? stack1
          : "") +
        "\n      </div>"
      );
    },
    useData: true,
  });
  templates["testimonials-template.hbs"] = template({
    1: function (container, depth0, helpers, partials, data) {
      var alias1 = container.lambda,
        alias2 = container.escapeExpression,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '            <div class="col">\n              <p class="text-black-50">\n                ' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "summary") : depth0,
            depth0
          )
        ) +
        "\n                <span>" +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '</span>\n                <a href="#">' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "email") : depth0,
            depth0
          )
        ) +
        "</a>\n              </p>\n            </div>\n"
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '    <h1 class="text-white">Testimonials</h1>\n      <div class="container">\n\n        <div class="row py-3">\n' +
        ((stack1 = lookupProperty(helpers, "each").call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0 != null ? lookupProperty(depth0, "data") : depth0,
          {
            name: "each",
            hash: {},
            fn: container.program(1, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 5, column: 10 },
              end: { line: 13, column: 19 },
            },
          }
        )) != null
          ? stack1
          : "") +
        "        </div>\n      </div>"
      );
    },
    useData: true,
  });
  templates["vision-template.hbs"] = template({
    1: function (container, depth0, helpers, partials, data) {
      var alias1 = container.lambda,
        alias2 = container.escapeExpression,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '        <div class="clearfix mb-3">\n          <a\n            href="#visions/' +
        alias2(
          alias1(depth0 != null ? lookupProperty(depth0, "id") : depth0, depth0)
        ) +
        '"\n            class="text-decoration-none"\n            onclick="loadDetails(\'visions/' +
        alias2(
          alias1(depth0 != null ? lookupProperty(depth0, "id") : depth0, depth0)
        ) +
        "','details-template','content')\"\n          >\n            <img\n              src=\"" +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "thumbpath") : depth0,
            depth0
          )
        ) +
        '"\n              alt="' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '"\n              class="float-start me-3 rounded-3"\n            />\n            <h3 class="text-dark">' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "name") : depth0,
            depth0
          )
        ) +
        '</h3>\n            <p class="text-black-50">\n              ' +
        alias2(
          alias1(
            depth0 != null ? lookupProperty(depth0, "summary") : depth0,
            depth0
          )
        ) +
        "\n            </p>\n          </a>\n        </div>\n"
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        '     <h1 class="py-3">Our Vision</h1>\n' +
        ((stack1 = lookupProperty(helpers, "each").call(
          depth0 != null ? depth0 : container.nullContext || {},
          depth0 != null ? lookupProperty(depth0, "data") : depth0,
          {
            name: "each",
            hash: {},
            fn: container.program(1, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 2, column: 6 },
              end: { line: 20, column: 15 },
            },
          }
        )) != null
          ? stack1
          : "")
      );
    },
    useData: true,
  });
})();
