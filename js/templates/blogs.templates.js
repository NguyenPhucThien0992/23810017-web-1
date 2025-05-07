(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blogs-categories-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>\n            <a\n              class=\"text-black-50 text-decoration-none\"\n              href=\"#\"\n              onclick=\"fetchBlogPagination('blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":61},"end":{"line":8,"column":67}}}) : helper)))
    + "', 1, 'blogs-template', 'blogs')\"\n            >"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":13},"end":{"line":9,"column":21}}}) : helper)))
    + "</a>\n          </li>\n\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <h1>Categories</h1>\n      <ul class=\"py-3\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":12,"column":17}}})) != null ? stack1 : "")
    + "      </ul>";
},"useData":true});
templates['blogs-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"clearfix py-3\">\n          <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":22}}}) : helper)))
    + "</h3>\n          <p\n            class=\"text-black-50\"\n          >\n            by\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":22}}}) : helper)))
    + "\n            in\n            <a href=\"javascript:void(0)\"onclick=\"fetchBlogPagination('blogs/categories/"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "', 1, 'blogs-template', 'blogs')\"\n            >"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>on\n            "
    + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":31}}}))
    + "\n            <a href=\"#\" onclick=\"fetchBlogDetails("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":14,"column":50},"end":{"line":14,"column":56}}}) : helper)))
    + ", true, checkLogin)\">Comment ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a>\n          </p>\n          <img\n            src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":17,"column":17},"end":{"line":17,"column":30}}}) : helper)))
    + "\"\n            alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":18,"column":17},"end":{"line":18,"column":25}}}) : helper)))
    + "\"\n            class=\"float-start me-3 border rounded-3\"\n          />\n          <p class=\"text-black-50\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":21,"column":35},"end":{"line":21,"column":46}}}) : helper)))
    + "</p>\n          <a href=\"#\" class=\"btn btn-link readmore ps-0\" onclick=\"fetchBlogDetails("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":22,"column":83},"end":{"line":22,"column":89}}}) : helper)))
    + ", false, checkLogin)\">Read more</a>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <nav aria-label=\"Page navigation example\">\n          <ul class=\"pagination\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":44,"column":21}}})) != null ? stack1 : "")
    + "          </ul>\n        </nav>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":14},"end":{"line":34,"column":21}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":14},"end":{"line":43,"column":25}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"page-item disabled\">\n                  <a class=\"page-link\" href=\"#\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"page","hash":{},"data":data,"loc":{"start":{"line":32,"column":48},"end":{"line":32,"column":56}}}) : helper)))
    + "</a>\n                </li>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"page-item\"><a\n                    class=\"page-link\"\n                    href=\"#\"\n                    onclick=\"fetchBlogPagination(\n                    '"
    + alias1(container.lambda((depths[2] != null ? lookupProperty(depths[2],"request") : depths[2]), depth0))
    + "', "
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":41,"column":41},"end":{"line":41,"column":49}}}) : helper)))
    + ", 'blogs-template', 'blogs')\"\n                  >"
    + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":42,"column":19},"end":{"line":42,"column":27}}}) : helper)))
    + "</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h3>Blog</h3>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":24,"column":15}}})) != null ? stack1 : "")
    + "      <!-- pagination -->\n"
    + ((stack1 = lookupProperty(helpers,"pagination").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),(depth0 != null ? lookupProperty(depth0,"pageCount") : depth0),{"name":"pagination","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":47,"column":21}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['details-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"py-3\">\n          <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":22}}}) : helper)))
    + "</h3>\n          <p class=\"text-black-50\">\n            by\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":22}}}) : helper)))
    + "\n            in\n            "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\n            on\n            "
    + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":31}}}))
    + "\n            <a\n              href=\"#comments\"\n              onclick=\"fetchBlogDetails("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":14,"column":40},"end":{"line":14,"column":46}}}) : helper)))
    + ", true)     \"\n            >Comment ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a>\n          </p>\n          <img\n            src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":18,"column":17},"end":{"line":18,"column":30}}}) : helper)))
    + "\"\n            alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":19,"column":17},"end":{"line":19,"column":25}}}) : helper)))
    + "\"\n            class=\"float-start me-3 border rounded-3\"\n          />\n          <div class=\"text-black-50\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":22,"column":37},"end":{"line":22,"column":54}}}) : helper))) != null ? stack1 : "")
    + "</div>\n        </div>\n        <div class=\"py-3\" id=\"leave-comment\">\n          <h3>Leave your comments</h3>\n          <form\n            action=\"#\"\n            id=\"formComment\"\n            method=\"post\"\n            onsubmit=\"onSubmitComment(event)\"\n            class=\"text-black-50\"\n          >\n            <input type=\"hidden\" id=\"blogId\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":33,"column":52},"end":{"line":33,"column":58}}}) : helper)))
    + "\" />\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <div class=\"mb-3\">\n                  <label for=\"name\" class=\"form-label\">Name(required)</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"name\"\n                    name=\"name\"\n                    placeholder=\"\"\n                    required\n                  />\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"mb-3\">\n                  <label for=\"email\" class=\"form-label\">Email(required)</label>\n                  <input\n                    required\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"email\"\n                    name=\"email\"\n                    placeholder=\"\"\n                    pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"mb-3\">\n                <textarea\n                  class=\"form-control\"\n                  name=\"comment\"\n                  id=\"comment\"\n                  rows=\"3\"\n                  placeholder=\"\"\n                ></textarea>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col d-flex justify-content-between\">\n                <div class=\"form-check-online\">\n                  <input\n                    id=\"agree\"\n                    value=\"1\"\n                    type=\"checkbox\"\n                    class=\"form-check-input:checkbox\"\n                    required\n                  />\n                  <label class=\"form-check-label\" for=\"first\">Argree to terms\n                    and conditions</label>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Submit Comment\n                </button>\n              </div>\n              <div class=\"text-center\">\n                <div class=\"text-success\" id=\"responseMessage\"></div>\n              </div>\n            </div>\n          </form>\n        </div>\n\n        <a name=\"comments\"></a>\n        <div class=\"bg-dark text-white-50 p-2\">\n          COMMENTS ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")\n        </div>\n        <div class=\"py-3 text-black-50\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"comments") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":103,"column":10},"end":{"line":108,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div>\n              <p> "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":105,"column":18},"end":{"line":105,"column":26}}}) : helper)))
    + " - "
    + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":105,"column":29},"end":{"line":105,"column":48}}}))
    + "</p>\n              <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":106,"column":17},"end":{"line":106,"column":28}}}) : helper)))
    + "</p>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <h1>Blogs</h1>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":110,"column":15}}})) != null ? stack1 : "");
},"useData":true});
})();