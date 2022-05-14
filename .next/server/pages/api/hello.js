"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: ./pages/api/hello.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
    const session = await (0,react_namespaceObject.getSession)({
        req
    });
    if (session) {
        var name = session.user.name;
        res.status(200).json({
            name: name
        });
    } else {
        res.status(401).json({
            message: "Not verfied"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(667));
module.exports = __webpack_exports__;

})();