"use strict";
(self.webpackChunk_2_fetchdata_components_storybook =
  self.webpackChunk_2_fetchdata_components_storybook || []).push([
  [618],
  {
    "./app/components/Atomic/PaginationButton.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/jsx-runtime.js"
      );
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      function cov_qh38h979v() {
        var path =
            "/Users/smey/Documents/SABAICODE-BOOTCAMP-5/Sabai-Code-Exercise/5-NextJS/2-fetchdata-components-storybook/app/components/Atomic/PaginationButton.tsx",
          global = new Function("return this")(),
          gcv = "__coverage__",
          coverage = global[gcv] || (global[gcv] = {});
        (coverage[path] &&
          "f4f6982a7b3b5ae88942364a84d0545ad76c7575" === coverage[path].hash) ||
          (coverage[path] = {
            path: "/Users/smey/Documents/SABAICODE-BOOTCAMP-5/Sabai-Code-Exercise/5-NextJS/2-fetchdata-components-storybook/app/components/Atomic/PaginationButton.tsx",
            statementMap: {
              0: {
                start: { line: 3, column: 25 },
                end: { line: 9, column: 1 },
              },
              1: { start: { line: 4, column: 4 }, end: { line: 8, column: 7 } },
              2: {
                start: { line: 6, column: 21 },
                end: { line: 6, column: 40 },
              },
            },
            fnMap: {
              0: {
                name: "(anonymous_0)",
                decl: {
                  start: { line: 3, column: 25 },
                  end: { line: 3, column: 26 },
                },
                loc: {
                  start: { line: 3, column: 62 },
                  end: { line: 9, column: 1 },
                },
                line: 3,
              },
              1: {
                name: "(anonymous_1)",
                decl: {
                  start: { line: 6, column: 17 },
                  end: { line: 6, column: 18 },
                },
                loc: {
                  start: { line: 6, column: 21 },
                  end: { line: 6, column: 40 },
                },
                line: 6,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 5, column: 52 },
                  end: { line: 5, column: 129 },
                },
                type: "cond-expr",
                locations: [
                  {
                    start: { line: 5, column: 63 },
                    end: { line: 5, column: 86 },
                  },
                  {
                    start: { line: 5, column: 89 },
                    end: { line: 5, column: 129 },
                  },
                ],
                line: 5,
              },
            },
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0, 1: 0 },
            b: { 0: [0, 0] },
            inputSourceMap: {
              version: 3,
              sources: [
                "/Users/smey/Documents/SABAICODE-BOOTCAMP-5/Sabai-Code-Exercise/5-NextJS/2-fetchdata-components-storybook/app/components/Atomic/PaginationButton.tsx",
              ],
              sourcesContent: [
                'import React from "react";\n\nexport interface PaginationButtonProps {\n  pageNumber: number;\n  isActive: boolean;\n  onClick: (pageNumber: number) => void;\n}\n\nconst PaginationButton: React.FC<PaginationButtonProps> = ({\n  pageNumber,\n  isActive,\n  onClick,\n}) => {\n  return (\n    <button\n      className={`mx-1 px-3 py-1 border rounded ${\n        isActive\n          ? "bg-red-500 text-white"\n          : "bg-white text-blue-500 border-blue-500"\n      }`}\n      onClick={() => onClick(pageNumber)}\n    >\n      {pageNumber}\n    </button>\n  );\n};\n\nexport default PaginationButton;\n',
              ],
              names: [
                "React",
                "PaginationButton",
                "pageNumber",
                "isActive",
                "onClick",
                "button",
                "className",
              ],
              mappings:
                ";AAAA,OAAOA,WAAW,QAAQ;AAQ1B,MAAMC,mBAAoD,CAAC,EACzDC,UAAU,EACVC,QAAQ,EACRC,OAAO,EACR;IACC,qBACE,KAACC;QACCC,WAAW,CAAC,8BAA8B,EACxCH,WACI,0BACA,yCACL,CAAC;QACFC,SAAS,IAAMA,QAAQF;kBAEtBA;;AAGP;AAEA,eAAeD,iBAAiB",
            },
            _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
            hash: "f4f6982a7b3b5ae88942364a84d0545ad76c7575",
          });
        var actualCoverage = coverage[path];
        return (
          (cov_qh38h979v = function () {
            return actualCoverage;
          }),
          actualCoverage
        );
      }
      cov_qh38h979v(), cov_qh38h979v().s[0]++;
      const PaginationButton = ({ pageNumber, isActive, onClick }) => (
          cov_qh38h979v().f[0]++,
          cov_qh38h979v().s[1]++,
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
            className:
              "mx-1 px-3 py-1 border rounded " +
              (isActive
                ? (cov_qh38h979v().b[0][0]++, "bg-red-500 text-white")
                : (cov_qh38h979v().b[0][1]++,
                  "bg-white text-blue-500 border-blue-500")),
            onClick: () => (
              cov_qh38h979v().f[1]++,
              cov_qh38h979v().s[2]++,
              onClick(pageNumber)
            ),
            children: pageNumber,
          })
        ),
        __WEBPACK_DEFAULT_EXPORT__ = PaginationButton;
      try {
        (PaginationButton.displayName = "PaginationButton"),
          (PaginationButton.__docgenInfo = {
            description: "",
            displayName: "PaginationButton",
            props: {
              pageNumber: {
                defaultValue: null,
                description: "",
                name: "pageNumber",
                required: !0,
                type: { name: "number" },
              },
              isActive: {
                defaultValue: null,
                description: "",
                name: "isActive",
                required: !0,
                type: { name: "boolean" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !0,
                type: { name: "(pageNumber: number) => void" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "app/components/Atomic/PaginationButton.tsx#PaginationButton"
            ] = {
              docgenInfo: PaginationButton.__docgenInfo,
              name: "PaginationButton",
              path: "app/components/Atomic/PaginationButton.tsx#PaginationButton",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./app/components/Atomic/PaginationButton.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Active: () => Active,
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js"
        ),
        _PaginationButton__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js"
          ),
          __webpack_require__("./app/components/Atomic/PaginationButton.tsx")),
        console = __webpack_require__(
          "./node_modules/console-browserify/index.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: "UI/atoms/PaginationButton",
          component: _PaginationButton__WEBPACK_IMPORTED_MODULE_2__.A,
        },
        Template = (args) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _PaginationButton__WEBPACK_IMPORTED_MODULE_2__.A,
            { ...args }
          ),
        Default = Template.bind({});
      Default.args = {
        pageNumber: 1,
        isActive: !1,
        onClick: (pageNumber) => console.log(pageNumber),
      };
      const Active = Template.bind({});
      Active.args = {
        pageNumber: 1,
        isActive: !0,
        onClick: (pageNumber) => console.log(pageNumber),
      };
      const __namedExportsOrder = ["Default", "Active"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "args => <PaginationButton {...args} />",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Active.parameters = {
          ...Active.parameters,
          docs: {
            ...Active.parameters?.docs,
            source: {
              originalSource: "args => <PaginationButton {...args} />",
              ...Active.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);