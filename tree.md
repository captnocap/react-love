.
├── ascii_art.txt
├── ascii_converter.py
├── CLAUDE.md
├── cli
│   ├── bin
│   │   └── ilovereact.mjs
│   ├── commands
│   │   ├── build.mjs
│   │   ├── dev.mjs
│   │   ├── init.mjs
│   │   ├── lint.mjs
│   │   ├── screenshot.mjs
│   │   └── update.mjs
│   ├── lib
│   │   └── aliases.mjs
│   ├── package.json
│   ├── runtime
│   │   ├── ilovereact
│   │   │   ├── components
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── Badge
│   │   │   │   │   │   ├── Badge.story.tsx
│   │   │   │   │   │   └── Badge.tsx
│   │   │   │   │   ├── Card
│   │   │   │   │   │   ├── Card.story.tsx
│   │   │   │   │   │   └── Card.tsx
│   │   │   │   │   ├── Divider
│   │   │   │   │   │   ├── Divider.story.tsx
│   │   │   │   │   │   └── Divider.tsx
│   │   │   │   │   ├── FlexColumn
│   │   │   │   │   │   ├── FlexColumn.story.tsx
│   │   │   │   │   │   └── FlexColumn.tsx
│   │   │   │   │   ├── FlexRow
│   │   │   │   │   │   ├── FlexRow.story.tsx
│   │   │   │   │   │   └── FlexRow.tsx
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Spacer
│   │   │   │   │   │   ├── Spacer.story.tsx
│   │   │   │   │   │   └── Spacer.tsx
│   │   │   │   │   └── stories.ts
│   │   │   │   └── tsconfig.json
│   │   │   ├── native
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── errorReporter.ts
│   │   │   │   │   ├── eventDispatcher.ts
│   │   │   │   │   ├── hostConfig.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Love2DApp.ts
│   │   │   │   │   ├── measureText.ts
│   │   │   │   │   ├── NativeBridge.ts
│   │   │   │   │   └── NativeRenderer.ts
│   │   │   │   └── tsconfig.json
│   │   │   ├── router
│   │   │   │   ├── package.json
│   │   │   │   └── src
│   │   │   │       ├── components.tsx
│   │   │   │       ├── context.tsx
│   │   │   │       ├── history.ts
│   │   │   │       ├── index.ts
│   │   │   │       ├── matcher.ts
│   │   │   │       └── types.ts
│   │   │   ├── shared
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── animation.ts
│   │   │   │   │   ├── Badge.tsx
│   │   │   │   │   ├── BarChart.tsx
│   │   │   │   │   ├── Breadcrumbs.tsx
│   │   │   │   │   ├── bridge.ts
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Checkbox.tsx
│   │   │   │   │   ├── CodeBlock.tsx
│   │   │   │   │   ├── colors.ts
│   │   │   │   │   ├── context.ts
│   │   │   │   │   ├── DebugOverlay.tsx
│   │   │   │   │   ├── Divider.tsx
│   │   │   │   │   ├── FlatList.tsx
│   │   │   │   │   ├── FlexColumn.tsx
│   │   │   │   │   ├── FlexRow.tsx
│   │   │   │   │   ├── hooks.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── NavPanel.tsx
│   │   │   │   │   ├── Portal.tsx
│   │   │   │   │   ├── Pressable.tsx
│   │   │   │   │   ├── primitives.tsx
│   │   │   │   │   ├── ProgressBar.tsx
│   │   │   │   │   ├── Radio.tsx
│   │   │   │   │   ├── ScrollView.tsx
│   │   │   │   │   ├── Select.tsx
│   │   │   │   │   ├── Slider.tsx
│   │   │   │   │   ├── Spacer.tsx
│   │   │   │   │   ├── Sparkline.tsx
│   │   │   │   │   ├── Switch.tsx
│   │   │   │   │   ├── Table.tsx
│   │   │   │   │   ├── Tabs.tsx
│   │   │   │   │   ├── TextEditor.tsx
│   │   │   │   │   ├── TextInput.tsx
│   │   │   │   │   ├── Toolbar.tsx
│   │   │   │   │   ├── types.ts
│   │   │   │   │   └── useDebug.ts
│   │   │   │   └── tsconfig.json
│   │   │   └── storage
│   │   │       ├── package.json
│   │   │       └── src
│   │   │           ├── adapters
│   │   │           │   ├── love2d-files.ts
│   │   │           │   ├── memory.ts
│   │   │           │   ├── terminal-sqlite.ts
│   │   │           │   └── web.ts
│   │   │           ├── crud.ts
│   │   │           ├── format.ts
│   │   │           ├── hooks.ts
│   │   │           ├── index.ts
│   │   │           ├── migrations.ts
│   │   │           ├── query.ts
│   │   │           ├── schema.ts
│   │   │           └── types.ts
│   │   ├── lib
│   │   │   └── libquickjs.so
│   │   └── lua
│   │       ├── animate.lua
│   │       ├── bridge_fs.lua
│   │       ├── bridge_quickjs.lua
│   │       ├── codeblock.lua
│   │       ├── console.lua
│   │       ├── errors.lua
│   │       ├── events.lua
│   │       ├── focus.lua
│   │       ├── http.lua
│   │       ├── images.lua
│   │       ├── init.lua
│   │       ├── inspector.lua
│   │       ├── json.lua
│   │       ├── layout.lua
│   │       ├── measure.lua
│   │       ├── painter.lua
│   │       ├── screenshot.lua
│   │       ├── storage.lua
│   │       ├── target_love2d.lua
│   │       ├── texteditor.lua
│   │       ├── tree.lua
│   │       └── zindex.lua
│   ├── targets.mjs
│   ├── template
│   │   ├── conf.lua
│   │   ├── main.lua
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   └── tsconfig.json
│   └── test
│       └── cli.test.mjs
├── content
│   ├── examples
│   │   ├── animation-demo.txt
│   │   ├── counter.txt
│   │   ├── dashboard.txt
│   │   ├── hello-world.txt
│   │   └── todo-app.txt
│   ├── metadata.json
│   └── sections
│       ├── 01-getting-started
│       │   ├── first-app.txt
│       │   ├── index.txt
│       │   ├── installation.txt
│       │   ├── philosophy.txt
│       │   └── quick-start.txt
│       ├── 02-architecture
│       │   ├── index.txt
│       │   ├── layout-engine.txt
│       │   ├── painter.txt
│       │   ├── pipeline.txt
│       │   ├── reconciler.txt
│       │   ├── source-of-truth.txt
│       │   └── transport.txt
│       ├── 03-cli-reference
│       │   ├── build.txt
│       │   ├── dev.txt
│       │   ├── index.txt
│       │   ├── init.txt
│       │   ├── lint.txt
│       │   ├── screenshot.txt
│       │   └── update.txt
│       ├── 04-layout-system
│       │   ├── critical-rules.txt
│       │   ├── flexbox.txt
│       │   ├── index.txt
│       │   ├── sizing.txt
│       │   ├── spacing.txt
│       │   ├── text-styling.txt
│       │   ├── transforms.txt
│       │   └── visual.txt
│       ├── 05-components
│       │   ├── barchart.txt
│       │   ├── box.txt
│       │   ├── breadcrumbs.txt
│       │   ├── checkbox.txt
│       │   ├── flatlist.txt
│       │   ├── image.txt
│       │   ├── index.txt
│       │   ├── modal.txt
│       │   ├── navpanel.txt
│       │   ├── pressable.txt
│       │   ├── progressbar.txt
│       │   ├── radio.txt
│       │   ├── scrollview.txt
│       │   ├── select.txt
│       │   ├── slider.txt
│       │   ├── sparkline.txt
│       │   ├── switch.txt
│       │   ├── table.txt
│       │   ├── tabs.txt
│       │   ├── texteditor.txt
│       │   ├── textinput.txt
│       │   ├── text.txt
│       │   └── toolbar.txt
│       ├── 06-hooks
│       │   ├── index.txt
│       │   ├── useloveevent.txt
│       │   ├── useloveoverlays.txt
│       │   ├── useloveready.txt
│       │   ├── useloverpc.txt
│       │   ├── uselovesend.txt
│       │   ├── uselovestate.txt
│       │   └── uselove.txt
│       ├── 07-animation
│       │   ├── animatedvalue.txt
│       │   ├── composite.txt
│       │   ├── easing.txt
│       │   ├── index.txt
│       │   ├── useanimation.txt
│       │   ├── usespring.txt
│       │   └── usetransition.txt
│       ├── 08-routing
│       │   └── index.txt
│       ├── 09-targets
│       │   ├── awesomewm.txt
│       │   ├── computercraft.txt
│       │   ├── hammerspoon.txt
│       │   ├── index.txt
│       │   ├── love2d.txt
│       │   ├── neovim.txt
│       │   ├── terminal.txt
│       │   └── web.txt
│       ├── 10-advanced
│       │   ├── custom-targets.txt
│       │   ├── debugging.txt
│       │   ├── event-handling.txt
│       │   ├── index.txt
│       │   ├── lua-runtime.txt
│       │   └── performance.txt
│       ├── 11-troubleshooting
│       │   ├── common-errors.txt
│       │   ├── faq.txt
│       │   └── index.txt
│       └── 12-api-reference
│           ├── index.txt
│           ├── style-properties.txt
│           └── types.txt
├── dist
│   ├── ilovereact-demo
│   └── llms
│       ├── animation.txt
│       ├── api.txt
│       ├── architecture.txt
│       ├── cheatsheet.txt
│       ├── cli.txt
│       ├── components.txt
│       ├── examples.txt
│       ├── getting-started.txt
│       ├── hooks.txt
│       ├── layout.txt
│       ├── llms.txt
│       ├── targets.txt
│       └── troubleshooting.txt
├── docs
│   ├── conversation.md
│   ├── reactor.md
│   ├── reactui-in-love-research.md
│   └── reference
│       ├── reactor00.zip
│       └── reactor01.zip
├── DOCS_CONTENT_FIRST_ARCHITECTURE.md
├── DOCS_IMPLEMENTATION_ROADMAP.md
├── examples
│   ├── awesome-demo
│   │   ├── dist
│   │   │   └── main.js
│   │   └── src
│   │       ├── App.tsx
│   │       └── main.tsx
│   ├── cc-demo
│   │   ├── dist
│   │   │   └── main.js
│   │   └── src
│   │       ├── App.tsx
│   │       └── main.tsx
│   ├── demo
│   │   ├── dist
│   │   ├── index.html
│   │   └── src
│   │       ├── canvas.ts
│   │       ├── components.tsx
│   │       ├── main.tsx
│   │       └── MockBridge.ts
│   ├── hs-demo
│   │   ├── dist
│   │   │   └── main.js
│   │   └── src
│   │       ├── App.tsx
│   │       └── main.tsx
│   ├── inspector-test
│   │   ├── conf.lua
│   │   ├── ilovereact
│   │   │   ├── components
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── Badge
│   │   │   │   │   │   ├── Badge.story.tsx
│   │   │   │   │   │   └── Badge.tsx
│   │   │   │   │   ├── Card
│   │   │   │   │   │   ├── Card.story.tsx
│   │   │   │   │   │   └── Card.tsx
│   │   │   │   │   ├── Divider
│   │   │   │   │   │   ├── Divider.story.tsx
│   │   │   │   │   │   └── Divider.tsx
│   │   │   │   │   ├── FlexColumn
│   │   │   │   │   │   ├── FlexColumn.story.tsx
│   │   │   │   │   │   └── FlexColumn.tsx
│   │   │   │   │   ├── FlexRow
│   │   │   │   │   │   ├── FlexRow.story.tsx
│   │   │   │   │   │   └── FlexRow.tsx
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Spacer
│   │   │   │   │   │   ├── Spacer.story.tsx
│   │   │   │   │   │   └── Spacer.tsx
│   │   │   │   │   └── stories.ts
│   │   │   │   └── tsconfig.json
│   │   │   ├── native
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── errorReporter.ts
│   │   │   │   │   ├── eventDispatcher.ts
│   │   │   │   │   ├── hostConfig.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Love2DApp.ts
│   │   │   │   │   ├── measureText.ts
│   │   │   │   │   ├── NativeBridge.ts
│   │   │   │   │   └── NativeRenderer.ts
│   │   │   │   └── tsconfig.json
│   │   │   ├── router
│   │   │   │   ├── package.json
│   │   │   │   └── src
│   │   │   │       ├── components.tsx
│   │   │   │       ├── context.tsx
│   │   │   │       ├── history.ts
│   │   │   │       ├── index.ts
│   │   │   │       ├── matcher.ts
│   │   │   │       └── types.ts
│   │   │   ├── shared
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── animation.ts
│   │   │   │   │   ├── Badge.tsx
│   │   │   │   │   ├── BarChart.tsx
│   │   │   │   │   ├── Breadcrumbs.tsx
│   │   │   │   │   ├── bridge.ts
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Checkbox.tsx
│   │   │   │   │   ├── colors.ts
│   │   │   │   │   ├── context.ts
│   │   │   │   │   ├── DebugOverlay.tsx
│   │   │   │   │   ├── Divider.tsx
│   │   │   │   │   ├── FlatList.tsx
│   │   │   │   │   ├── FlexColumn.tsx
│   │   │   │   │   ├── FlexRow.tsx
│   │   │   │   │   ├── hooks.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── NavPanel.tsx
│   │   │   │   │   ├── Portal.tsx
│   │   │   │   │   ├── Pressable.tsx
│   │   │   │   │   ├── primitives.tsx
│   │   │   │   │   ├── ProgressBar.tsx
│   │   │   │   │   ├── Radio.tsx
│   │   │   │   │   ├── ScrollView.tsx
│   │   │   │   │   ├── Select.tsx
│   │   │   │   │   ├── Slider.tsx
│   │   │   │   │   ├── Spacer.tsx
│   │   │   │   │   ├── Sparkline.tsx
│   │   │   │   │   ├── Switch.tsx
│   │   │   │   │   ├── Table.tsx
│   │   │   │   │   ├── Tabs.tsx
│   │   │   │   │   ├── TextEditor.tsx
│   │   │   │   │   ├── TextInput.tsx
│   │   │   │   │   ├── Toolbar.tsx
│   │   │   │   │   ├── types.ts
│   │   │   │   │   └── useDebug.ts
│   │   │   │   └── tsconfig.json
│   │   │   └── storage
│   │   │       ├── package.json
│   │   │       └── src
│   │   │           ├── adapters
│   │   │           │   ├── love2d-files.ts
│   │   │           │   ├── memory.ts
│   │   │           │   ├── terminal-sqlite.ts
│   │   │           │   └── web.ts
│   │   │           ├── crud.ts
│   │   │           ├── format.ts
│   │   │           ├── hooks.ts
│   │   │           ├── index.ts
│   │   │           ├── migrations.ts
│   │   │           ├── query.ts
│   │   │           ├── schema.ts
│   │   │           └── types.ts
│   │   ├── lib
│   │   │   └── libquickjs.so
│   │   ├── lua
│   │   │   ├── animate.lua
│   │   │   ├── bridge_fs.lua
│   │   │   ├── bridge_quickjs.lua
│   │   │   ├── console.lua
│   │   │   ├── errors.lua
│   │   │   ├── events.lua
│   │   │   ├── focus.lua
│   │   │   ├── images.lua
│   │   │   ├── init.lua
│   │   │   ├── inspector.lua
│   │   │   ├── layout.lua
│   │   │   ├── measure.lua
│   │   │   ├── painter.lua
│   │   │   ├── screenshot.lua
│   │   │   ├── storage.lua
│   │   │   ├── target_love2d.lua
│   │   │   ├── texteditor.lua
│   │   │   ├── tree.lua
│   │   │   └── zindex.lua
│   │   ├── main.lua
│   │   ├── package.json
│   │   └── src
│   │       └── main.tsx
│   ├── logo
│   │   ├── bundle.js
│   │   ├── conf.lua
│   │   ├── dist
│   │   │   └── logo
│   │   ├── ilovereact
│   │   │   ├── native
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── errorReporter.ts
│   │   │   │   │   ├── eventDispatcher.ts
│   │   │   │   │   ├── hostConfig.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Love2DApp.ts
│   │   │   │   │   ├── measureText.ts
│   │   │   │   │   ├── NativeBridge.ts
│   │   │   │   │   └── NativeRenderer.ts
│   │   │   │   └── tsconfig.json
│   │   │   └── shared
│   │   │       ├── package.json
│   │   │       ├── src
│   │   │       │   ├── animation.ts
│   │   │       │   ├── Badge.tsx
│   │   │       │   ├── bridge.ts
│   │   │       │   ├── Card.tsx
│   │   │       │   ├── Checkbox.tsx
│   │   │       │   ├── context.ts
│   │   │       │   ├── Divider.tsx
│   │   │       │   ├── FlatList.tsx
│   │   │       │   ├── FlexColumn.tsx
│   │   │       │   ├── FlexRow.tsx
│   │   │       │   ├── hooks.ts
│   │   │       │   ├── index.ts
│   │   │       │   ├── Modal.tsx
│   │   │       │   ├── Portal.tsx
│   │   │       │   ├── Pressable.tsx
│   │   │       │   ├── primitives.tsx
│   │   │       │   ├── Radio.tsx
│   │   │       │   ├── ScrollView.tsx
│   │   │       │   ├── Select.tsx
│   │   │       │   ├── Slider.tsx
│   │   │       │   ├── Spacer.tsx
│   │   │       │   ├── Switch.tsx
│   │   │       │   ├── TextEditor.tsx
│   │   │       │   ├── TextInput.tsx
│   │   │       │   └── types.ts
│   │   │       └── tsconfig.json
│   │   ├── lib
│   │   │   └── libquickjs.so
│   │   ├── lua
│   │   │   ├── bridge_fs.lua
│   │   │   ├── bridge_quickjs.lua
│   │   │   ├── errors.lua
│   │   │   ├── events.lua
│   │   │   ├── focus.lua
│   │   │   ├── images.lua
│   │   │   ├── init.lua
│   │   │   ├── inspector.lua
│   │   │   ├── layout.lua
│   │   │   ├── measure.lua
│   │   │   ├── painter.lua
│   │   │   ├── screenshot.lua
│   │   │   ├── target_love2d.lua
│   │   │   ├── texteditor.lua
│   │   │   ├── tree.lua
│   │   │   └── zindex.lua
│   │   ├── main.lua
│   │   ├── node_modules
│   │   │   ├── csstype
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js.flow
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── @esbuild
│   │   │   │   └── linux-x64
│   │   │   │       ├── bin
│   │   │   │       │   └── esbuild
│   │   │   │       ├── package.json
│   │   │   │       └── README.md
│   │   │   ├── esbuild
│   │   │   │   ├── bin
│   │   │   │   │   └── esbuild
│   │   │   │   ├── install.js
│   │   │   │   ├── lib
│   │   │   │   │   ├── main.d.ts
│   │   │   │   │   └── main.js
│   │   │   │   ├── LICENSE.md
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── js-tokens
│   │   │   │   ├── CHANGELOG.md
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── loose-envify
│   │   │   │   ├── cli.js
│   │   │   │   ├── custom.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── loose-envify.js
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── replace.js
│   │   │   ├── react
│   │   │   │   ├── cjs
│   │   │   │   │   ├── react.development.js
│   │   │   │   │   ├── react-jsx-dev-runtime.development.js
│   │   │   │   │   ├── react-jsx-dev-runtime.production.min.js
│   │   │   │   │   ├── react-jsx-dev-runtime.profiling.min.js
│   │   │   │   │   ├── react-jsx-runtime.development.js
│   │   │   │   │   ├── react-jsx-runtime.production.min.js
│   │   │   │   │   ├── react-jsx-runtime.profiling.min.js
│   │   │   │   │   ├── react.production.min.js
│   │   │   │   │   ├── react.shared-subset.development.js
│   │   │   │   │   └── react.shared-subset.production.min.js
│   │   │   │   ├── index.js
│   │   │   │   ├── jsx-dev-runtime.js
│   │   │   │   ├── jsx-runtime.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── react.shared-subset.js
│   │   │   │   ├── README.md
│   │   │   │   └── umd
│   │   │   │       ├── react.development.js
│   │   │   │       ├── react.production.min.js
│   │   │   │       └── react.profiling.min.js
│   │   │   ├── react-reconciler
│   │   │   │   ├── cjs
│   │   │   │   │   ├── react-reconciler-constants.development.js
│   │   │   │   │   ├── react-reconciler-constants.production.min.js
│   │   │   │   │   ├── react-reconciler.development.js
│   │   │   │   │   ├── react-reconciler.production.min.js
│   │   │   │   │   ├── react-reconciler.profiling.min.js
│   │   │   │   │   ├── react-reconciler-reflection.development.js
│   │   │   │   │   └── react-reconciler-reflection.production.min.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── reflection.js
│   │   │   ├── scheduler
│   │   │   │   ├── cjs
│   │   │   │   │   ├── scheduler.development.js
│   │   │   │   │   ├── scheduler.production.min.js
│   │   │   │   │   ├── scheduler-unstable_mock.development.js
│   │   │   │   │   ├── scheduler-unstable_mock.production.min.js
│   │   │   │   │   ├── scheduler-unstable_post_task.development.js
│   │   │   │   │   └── scheduler-unstable_post_task.production.min.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   ├── umd
│   │   │   │   │   ├── scheduler.development.js
│   │   │   │   │   ├── scheduler.production.min.js
│   │   │   │   │   ├── scheduler.profiling.min.js
│   │   │   │   │   ├── scheduler-unstable_mock.development.js
│   │   │   │   │   └── scheduler-unstable_mock.production.min.js
│   │   │   │   ├── unstable_mock.js
│   │   │   │   └── unstable_post_task.js
│   │   │   ├── @types
│   │   │   │   ├── prop-types
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── LICENSE
│   │   │   │   │   ├── package.json
│   │   │   │   │   └── README.md
│   │   │   │   └── react
│   │   │   │       ├── canary.d.ts
│   │   │   │       ├── experimental.d.ts
│   │   │   │       ├── global.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── jsx-dev-runtime.d.ts
│   │   │   │       ├── jsx-runtime.d.ts
│   │   │   │       ├── LICENSE
│   │   │   │       ├── package.json
│   │   │   │       ├── README.md
│   │   │   │       └── ts5.0
│   │   │   │           ├── canary.d.ts
│   │   │   │           ├── experimental.d.ts
│   │   │   │           ├── global.d.ts
│   │   │   │           ├── index.d.ts
│   │   │   │           ├── jsx-dev-runtime.d.ts
│   │   │   │           └── jsx-runtime.d.ts
│   │   │   └── typescript
│   │   │       ├── bin
│   │   │       │   ├── tsc
│   │   │       │   └── tsserver
│   │   │       ├── lib
│   │   │       │   ├── cs
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── de
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── es
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── fr
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── it
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ja
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ko
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── lib.decorators.d.ts
│   │   │       │   ├── lib.decorators.legacy.d.ts
│   │   │       │   ├── lib.dom.asynciterable.d.ts
│   │   │       │   ├── lib.dom.d.ts
│   │   │       │   ├── lib.dom.iterable.d.ts
│   │   │       │   ├── lib.d.ts
│   │   │       │   ├── lib.es2015.collection.d.ts
│   │   │       │   ├── lib.es2015.core.d.ts
│   │   │       │   ├── lib.es2015.d.ts
│   │   │       │   ├── lib.es2015.generator.d.ts
│   │   │       │   ├── lib.es2015.iterable.d.ts
│   │   │       │   ├── lib.es2015.promise.d.ts
│   │   │       │   ├── lib.es2015.proxy.d.ts
│   │   │       │   ├── lib.es2015.reflect.d.ts
│   │   │       │   ├── lib.es2015.symbol.d.ts
│   │   │       │   ├── lib.es2015.symbol.wellknown.d.ts
│   │   │       │   ├── lib.es2016.array.include.d.ts
│   │   │       │   ├── lib.es2016.d.ts
│   │   │       │   ├── lib.es2016.full.d.ts
│   │   │       │   ├── lib.es2016.intl.d.ts
│   │   │       │   ├── lib.es2017.arraybuffer.d.ts
│   │   │       │   ├── lib.es2017.date.d.ts
│   │   │       │   ├── lib.es2017.d.ts
│   │   │       │   ├── lib.es2017.full.d.ts
│   │   │       │   ├── lib.es2017.intl.d.ts
│   │   │       │   ├── lib.es2017.object.d.ts
│   │   │       │   ├── lib.es2017.sharedmemory.d.ts
│   │   │       │   ├── lib.es2017.string.d.ts
│   │   │       │   ├── lib.es2017.typedarrays.d.ts
│   │   │       │   ├── lib.es2018.asyncgenerator.d.ts
│   │   │       │   ├── lib.es2018.asynciterable.d.ts
│   │   │       │   ├── lib.es2018.d.ts
│   │   │       │   ├── lib.es2018.full.d.ts
│   │   │       │   ├── lib.es2018.intl.d.ts
│   │   │       │   ├── lib.es2018.promise.d.ts
│   │   │       │   ├── lib.es2018.regexp.d.ts
│   │   │       │   ├── lib.es2019.array.d.ts
│   │   │       │   ├── lib.es2019.d.ts
│   │   │       │   ├── lib.es2019.full.d.ts
│   │   │       │   ├── lib.es2019.intl.d.ts
│   │   │       │   ├── lib.es2019.object.d.ts
│   │   │       │   ├── lib.es2019.string.d.ts
│   │   │       │   ├── lib.es2019.symbol.d.ts
│   │   │       │   ├── lib.es2020.bigint.d.ts
│   │   │       │   ├── lib.es2020.date.d.ts
│   │   │       │   ├── lib.es2020.d.ts
│   │   │       │   ├── lib.es2020.full.d.ts
│   │   │       │   ├── lib.es2020.intl.d.ts
│   │   │       │   ├── lib.es2020.number.d.ts
│   │   │       │   ├── lib.es2020.promise.d.ts
│   │   │       │   ├── lib.es2020.sharedmemory.d.ts
│   │   │       │   ├── lib.es2020.string.d.ts
│   │   │       │   ├── lib.es2020.symbol.wellknown.d.ts
│   │   │       │   ├── lib.es2021.d.ts
│   │   │       │   ├── lib.es2021.full.d.ts
│   │   │       │   ├── lib.es2021.intl.d.ts
│   │   │       │   ├── lib.es2021.promise.d.ts
│   │   │       │   ├── lib.es2021.string.d.ts
│   │   │       │   ├── lib.es2021.weakref.d.ts
│   │   │       │   ├── lib.es2022.array.d.ts
│   │   │       │   ├── lib.es2022.d.ts
│   │   │       │   ├── lib.es2022.error.d.ts
│   │   │       │   ├── lib.es2022.full.d.ts
│   │   │       │   ├── lib.es2022.intl.d.ts
│   │   │       │   ├── lib.es2022.object.d.ts
│   │   │       │   ├── lib.es2022.regexp.d.ts
│   │   │       │   ├── lib.es2022.string.d.ts
│   │   │       │   ├── lib.es2023.array.d.ts
│   │   │       │   ├── lib.es2023.collection.d.ts
│   │   │       │   ├── lib.es2023.d.ts
│   │   │       │   ├── lib.es2023.full.d.ts
│   │   │       │   ├── lib.es2023.intl.d.ts
│   │   │       │   ├── lib.es2024.arraybuffer.d.ts
│   │   │       │   ├── lib.es2024.collection.d.ts
│   │   │       │   ├── lib.es2024.d.ts
│   │   │       │   ├── lib.es2024.full.d.ts
│   │   │       │   ├── lib.es2024.object.d.ts
│   │   │       │   ├── lib.es2024.promise.d.ts
│   │   │       │   ├── lib.es2024.regexp.d.ts
│   │   │       │   ├── lib.es2024.sharedmemory.d.ts
│   │   │       │   ├── lib.es2024.string.d.ts
│   │   │       │   ├── lib.es5.d.ts
│   │   │       │   ├── lib.es6.d.ts
│   │   │       │   ├── lib.esnext.array.d.ts
│   │   │       │   ├── lib.esnext.collection.d.ts
│   │   │       │   ├── lib.esnext.decorators.d.ts
│   │   │       │   ├── lib.esnext.disposable.d.ts
│   │   │       │   ├── lib.esnext.d.ts
│   │   │       │   ├── lib.esnext.error.d.ts
│   │   │       │   ├── lib.esnext.float16.d.ts
│   │   │       │   ├── lib.esnext.full.d.ts
│   │   │       │   ├── lib.esnext.intl.d.ts
│   │   │       │   ├── lib.esnext.iterator.d.ts
│   │   │       │   ├── lib.esnext.promise.d.ts
│   │   │       │   ├── lib.esnext.sharedmemory.d.ts
│   │   │       │   ├── lib.scripthost.d.ts
│   │   │       │   ├── lib.webworker.asynciterable.d.ts
│   │   │       │   ├── lib.webworker.d.ts
│   │   │       │   ├── lib.webworker.importscripts.d.ts
│   │   │       │   ├── lib.webworker.iterable.d.ts
│   │   │       │   ├── pl
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── pt-br
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ru
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── tr
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── _tsc.js
│   │   │       │   ├── tsc.js
│   │   │       │   ├── _tsserver.js
│   │   │       │   ├── tsserver.js
│   │   │       │   ├── tsserverlibrary.d.ts
│   │   │       │   ├── tsserverlibrary.js
│   │   │       │   ├── typescript.d.ts
│   │   │       │   ├── typescript.js
│   │   │       │   ├── typesMap.json
│   │   │       │   ├── _typingsInstaller.js
│   │   │       │   ├── typingsInstaller.js
│   │   │       │   ├── watchGuard.js
│   │   │       │   ├── zh-cn
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   └── zh-tw
│   │   │       │       └── diagnosticMessages.generated.json
│   │   │       ├── LICENSE.txt
│   │   │       ├── package.json
│   │   │       ├── README.md
│   │   │       ├── SECURITY.md
│   │   │       └── ThirdPartyNoticeText.txt
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   └── tsconfig.json
│   ├── native-hud
│   │   ├── game
│   │   │   ├── bundle.js
│   │   │   ├── conf.lua
│   │   │   ├── lib
│   │   │   │   └── libquickjs.so
│   │   │   └── main.lua
│   │   └── src
│   │       └── main.tsx
│   ├── neofetch
│   │   ├── dist
│   │   │   └── neofetch
│   │   ├── love
│   │   │   ├── bundle.js
│   │   │   ├── conf.lua
│   │   │   ├── lib
│   │   │   │   └── libquickjs.so
│   │   │   └── main.lua
│   │   ├── packaging
│   │   │   ├── conf.lua
│   │   │   └── main.lua
│   │   └── src
│   │       ├── App.tsx
│   │       ├── main-terminal.tsx
│   │       ├── main.tsx
│   │       └── sysinfo.ts
│   ├── nvim-demo
│   │   ├── dist
│   │   │   └── main.js
│   │   └── src
│   │       ├── App.tsx
│   │       └── main.tsx
│   ├── playground
│   │   ├── bundle.js
│   │   ├── conf.lua
│   │   ├── dist
│   │   │   └── playground
│   │   ├── ilovereact
│   │   │   ├── native
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── errorReporter.ts
│   │   │   │   │   ├── eventDispatcher.ts
│   │   │   │   │   ├── hostConfig.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Love2DApp.ts
│   │   │   │   │   ├── measureText.ts
│   │   │   │   │   ├── NativeBridge.ts
│   │   │   │   │   └── NativeRenderer.ts
│   │   │   │   └── tsconfig.json
│   │   │   └── shared
│   │   │       ├── package.json
│   │   │       ├── src
│   │   │       │   ├── animation.ts
│   │   │       │   ├── Badge.tsx
│   │   │       │   ├── BarChart.tsx
│   │   │       │   ├── Breadcrumbs.tsx
│   │   │       │   ├── bridge.ts
│   │   │       │   ├── Card.tsx
│   │   │       │   ├── Checkbox.tsx
│   │   │       │   ├── colors.ts
│   │   │       │   ├── context.ts
│   │   │       │   ├── DebugOverlay.tsx
│   │   │       │   ├── Divider.tsx
│   │   │       │   ├── FlatList.tsx
│   │   │       │   ├── FlexColumn.tsx
│   │   │       │   ├── FlexRow.tsx
│   │   │       │   ├── hooks.ts
│   │   │       │   ├── index.ts
│   │   │       │   ├── Modal.tsx
│   │   │       │   ├── NavPanel.tsx
│   │   │       │   ├── Portal.tsx
│   │   │       │   ├── Pressable.tsx
│   │   │       │   ├── primitives.tsx
│   │   │       │   ├── ProgressBar.tsx
│   │   │       │   ├── Radio.tsx
│   │   │       │   ├── ScrollView.tsx
│   │   │       │   ├── Select.tsx
│   │   │       │   ├── Slider.tsx
│   │   │       │   ├── Spacer.tsx
│   │   │       │   ├── Sparkline.tsx
│   │   │       │   ├── Switch.tsx
│   │   │       │   ├── Table.tsx
│   │   │       │   ├── Tabs.tsx
│   │   │       │   ├── TextEditor.tsx
│   │   │       │   ├── TextInput.tsx
│   │   │       │   ├── Toolbar.tsx
│   │   │       │   ├── types.ts
│   │   │       │   └── useDebug.ts
│   │   │       └── tsconfig.json
│   │   ├── lib
│   │   │   └── libquickjs.so
│   │   ├── lua
│   │   │   ├── animate.lua
│   │   │   ├── bridge_fs.lua
│   │   │   ├── bridge_quickjs.lua
│   │   │   ├── console.lua
│   │   │   ├── errors.lua
│   │   │   ├── events.lua
│   │   │   ├── focus.lua
│   │   │   ├── images.lua
│   │   │   ├── init.lua
│   │   │   ├── inspector.lua
│   │   │   ├── layout.lua
│   │   │   ├── measure.lua
│   │   │   ├── painter.lua
│   │   │   ├── screenshot.lua
│   │   │   ├── target_love2d.lua
│   │   │   ├── texteditor.lua
│   │   │   ├── tree.lua
│   │   │   └── zindex.lua
│   │   ├── main.lua
│   │   ├── node_modules
│   │   │   ├── csstype
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js.flow
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── @esbuild
│   │   │   │   └── linux-x64
│   │   │   │       ├── bin
│   │   │   │       │   └── esbuild
│   │   │   │       ├── package.json
│   │   │   │       └── README.md
│   │   │   ├── esbuild
│   │   │   │   ├── bin
│   │   │   │   │   └── esbuild
│   │   │   │   ├── install.js
│   │   │   │   ├── lib
│   │   │   │   │   ├── main.d.ts
│   │   │   │   │   └── main.js
│   │   │   │   ├── LICENSE.md
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── js-tokens
│   │   │   │   ├── CHANGELOG.md
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── loose-envify
│   │   │   │   ├── cli.js
│   │   │   │   ├── custom.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── loose-envify.js
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── replace.js
│   │   │   ├── react
│   │   │   │   ├── cjs
│   │   │   │   │   ├── react.development.js
│   │   │   │   │   ├── react-jsx-dev-runtime.development.js
│   │   │   │   │   ├── react-jsx-dev-runtime.production.min.js
│   │   │   │   │   ├── react-jsx-dev-runtime.profiling.min.js
│   │   │   │   │   ├── react-jsx-runtime.development.js
│   │   │   │   │   ├── react-jsx-runtime.production.min.js
│   │   │   │   │   ├── react-jsx-runtime.profiling.min.js
│   │   │   │   │   ├── react.production.min.js
│   │   │   │   │   ├── react.shared-subset.development.js
│   │   │   │   │   └── react.shared-subset.production.min.js
│   │   │   │   ├── index.js
│   │   │   │   ├── jsx-dev-runtime.js
│   │   │   │   ├── jsx-runtime.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── react.shared-subset.js
│   │   │   │   ├── README.md
│   │   │   │   └── umd
│   │   │   │       ├── react.development.js
│   │   │   │       ├── react.production.min.js
│   │   │   │       └── react.profiling.min.js
│   │   │   ├── react-reconciler
│   │   │   │   ├── cjs
│   │   │   │   │   ├── react-reconciler-constants.development.js
│   │   │   │   │   ├── react-reconciler-constants.production.min.js
│   │   │   │   │   ├── react-reconciler.development.js
│   │   │   │   │   ├── react-reconciler.production.min.js
│   │   │   │   │   ├── react-reconciler.profiling.min.js
│   │   │   │   │   ├── react-reconciler-reflection.development.js
│   │   │   │   │   └── react-reconciler-reflection.production.min.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── reflection.js
│   │   │   ├── scheduler
│   │   │   │   ├── cjs
│   │   │   │   │   ├── scheduler.development.js
│   │   │   │   │   ├── scheduler.production.min.js
│   │   │   │   │   ├── scheduler-unstable_mock.development.js
│   │   │   │   │   ├── scheduler-unstable_mock.production.min.js
│   │   │   │   │   ├── scheduler-unstable_post_task.development.js
│   │   │   │   │   └── scheduler-unstable_post_task.production.min.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   ├── umd
│   │   │   │   │   ├── scheduler.development.js
│   │   │   │   │   ├── scheduler.production.min.js
│   │   │   │   │   ├── scheduler.profiling.min.js
│   │   │   │   │   ├── scheduler-unstable_mock.development.js
│   │   │   │   │   └── scheduler-unstable_mock.production.min.js
│   │   │   │   ├── unstable_mock.js
│   │   │   │   └── unstable_post_task.js
│   │   │   ├── @types
│   │   │   │   ├── prop-types
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── LICENSE
│   │   │   │   │   ├── package.json
│   │   │   │   │   └── README.md
│   │   │   │   └── react
│   │   │   │       ├── canary.d.ts
│   │   │   │       ├── experimental.d.ts
│   │   │   │       ├── global.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── jsx-dev-runtime.d.ts
│   │   │   │       ├── jsx-runtime.d.ts
│   │   │   │       ├── LICENSE
│   │   │   │       ├── package.json
│   │   │   │       ├── README.md
│   │   │   │       └── ts5.0
│   │   │   │           ├── canary.d.ts
│   │   │   │           ├── experimental.d.ts
│   │   │   │           ├── global.d.ts
│   │   │   │           ├── index.d.ts
│   │   │   │           ├── jsx-dev-runtime.d.ts
│   │   │   │           └── jsx-runtime.d.ts
│   │   │   └── typescript
│   │   │       ├── bin
│   │   │       │   ├── tsc
│   │   │       │   └── tsserver
│   │   │       ├── lib
│   │   │       │   ├── cs
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── de
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── es
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── fr
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── it
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ja
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ko
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── lib.decorators.d.ts
│   │   │       │   ├── lib.decorators.legacy.d.ts
│   │   │       │   ├── lib.dom.asynciterable.d.ts
│   │   │       │   ├── lib.dom.d.ts
│   │   │       │   ├── lib.dom.iterable.d.ts
│   │   │       │   ├── lib.d.ts
│   │   │       │   ├── lib.es2015.collection.d.ts
│   │   │       │   ├── lib.es2015.core.d.ts
│   │   │       │   ├── lib.es2015.d.ts
│   │   │       │   ├── lib.es2015.generator.d.ts
│   │   │       │   ├── lib.es2015.iterable.d.ts
│   │   │       │   ├── lib.es2015.promise.d.ts
│   │   │       │   ├── lib.es2015.proxy.d.ts
│   │   │       │   ├── lib.es2015.reflect.d.ts
│   │   │       │   ├── lib.es2015.symbol.d.ts
│   │   │       │   ├── lib.es2015.symbol.wellknown.d.ts
│   │   │       │   ├── lib.es2016.array.include.d.ts
│   │   │       │   ├── lib.es2016.d.ts
│   │   │       │   ├── lib.es2016.full.d.ts
│   │   │       │   ├── lib.es2016.intl.d.ts
│   │   │       │   ├── lib.es2017.arraybuffer.d.ts
│   │   │       │   ├── lib.es2017.date.d.ts
│   │   │       │   ├── lib.es2017.d.ts
│   │   │       │   ├── lib.es2017.full.d.ts
│   │   │       │   ├── lib.es2017.intl.d.ts
│   │   │       │   ├── lib.es2017.object.d.ts
│   │   │       │   ├── lib.es2017.sharedmemory.d.ts
│   │   │       │   ├── lib.es2017.string.d.ts
│   │   │       │   ├── lib.es2017.typedarrays.d.ts
│   │   │       │   ├── lib.es2018.asyncgenerator.d.ts
│   │   │       │   ├── lib.es2018.asynciterable.d.ts
│   │   │       │   ├── lib.es2018.d.ts
│   │   │       │   ├── lib.es2018.full.d.ts
│   │   │       │   ├── lib.es2018.intl.d.ts
│   │   │       │   ├── lib.es2018.promise.d.ts
│   │   │       │   ├── lib.es2018.regexp.d.ts
│   │   │       │   ├── lib.es2019.array.d.ts
│   │   │       │   ├── lib.es2019.d.ts
│   │   │       │   ├── lib.es2019.full.d.ts
│   │   │       │   ├── lib.es2019.intl.d.ts
│   │   │       │   ├── lib.es2019.object.d.ts
│   │   │       │   ├── lib.es2019.string.d.ts
│   │   │       │   ├── lib.es2019.symbol.d.ts
│   │   │       │   ├── lib.es2020.bigint.d.ts
│   │   │       │   ├── lib.es2020.date.d.ts
│   │   │       │   ├── lib.es2020.d.ts
│   │   │       │   ├── lib.es2020.full.d.ts
│   │   │       │   ├── lib.es2020.intl.d.ts
│   │   │       │   ├── lib.es2020.number.d.ts
│   │   │       │   ├── lib.es2020.promise.d.ts
│   │   │       │   ├── lib.es2020.sharedmemory.d.ts
│   │   │       │   ├── lib.es2020.string.d.ts
│   │   │       │   ├── lib.es2020.symbol.wellknown.d.ts
│   │   │       │   ├── lib.es2021.d.ts
│   │   │       │   ├── lib.es2021.full.d.ts
│   │   │       │   ├── lib.es2021.intl.d.ts
│   │   │       │   ├── lib.es2021.promise.d.ts
│   │   │       │   ├── lib.es2021.string.d.ts
│   │   │       │   ├── lib.es2021.weakref.d.ts
│   │   │       │   ├── lib.es2022.array.d.ts
│   │   │       │   ├── lib.es2022.d.ts
│   │   │       │   ├── lib.es2022.error.d.ts
│   │   │       │   ├── lib.es2022.full.d.ts
│   │   │       │   ├── lib.es2022.intl.d.ts
│   │   │       │   ├── lib.es2022.object.d.ts
│   │   │       │   ├── lib.es2022.regexp.d.ts
│   │   │       │   ├── lib.es2022.string.d.ts
│   │   │       │   ├── lib.es2023.array.d.ts
│   │   │       │   ├── lib.es2023.collection.d.ts
│   │   │       │   ├── lib.es2023.d.ts
│   │   │       │   ├── lib.es2023.full.d.ts
│   │   │       │   ├── lib.es2023.intl.d.ts
│   │   │       │   ├── lib.es2024.arraybuffer.d.ts
│   │   │       │   ├── lib.es2024.collection.d.ts
│   │   │       │   ├── lib.es2024.d.ts
│   │   │       │   ├── lib.es2024.full.d.ts
│   │   │       │   ├── lib.es2024.object.d.ts
│   │   │       │   ├── lib.es2024.promise.d.ts
│   │   │       │   ├── lib.es2024.regexp.d.ts
│   │   │       │   ├── lib.es2024.sharedmemory.d.ts
│   │   │       │   ├── lib.es2024.string.d.ts
│   │   │       │   ├── lib.es5.d.ts
│   │   │       │   ├── lib.es6.d.ts
│   │   │       │   ├── lib.esnext.array.d.ts
│   │   │       │   ├── lib.esnext.collection.d.ts
│   │   │       │   ├── lib.esnext.decorators.d.ts
│   │   │       │   ├── lib.esnext.disposable.d.ts
│   │   │       │   ├── lib.esnext.d.ts
│   │   │       │   ├── lib.esnext.error.d.ts
│   │   │       │   ├── lib.esnext.float16.d.ts
│   │   │       │   ├── lib.esnext.full.d.ts
│   │   │       │   ├── lib.esnext.intl.d.ts
│   │   │       │   ├── lib.esnext.iterator.d.ts
│   │   │       │   ├── lib.esnext.promise.d.ts
│   │   │       │   ├── lib.esnext.sharedmemory.d.ts
│   │   │       │   ├── lib.scripthost.d.ts
│   │   │       │   ├── lib.webworker.asynciterable.d.ts
│   │   │       │   ├── lib.webworker.d.ts
│   │   │       │   ├── lib.webworker.importscripts.d.ts
│   │   │       │   ├── lib.webworker.iterable.d.ts
│   │   │       │   ├── pl
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── pt-br
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ru
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── tr
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── _tsc.js
│   │   │       │   ├── tsc.js
│   │   │       │   ├── _tsserver.js
│   │   │       │   ├── tsserver.js
│   │   │       │   ├── tsserverlibrary.d.ts
│   │   │       │   ├── tsserverlibrary.js
│   │   │       │   ├── typescript.d.ts
│   │   │       │   ├── typescript.js
│   │   │       │   ├── typesMap.json
│   │   │       │   ├── _typingsInstaller.js
│   │   │       │   ├── typingsInstaller.js
│   │   │       │   ├── watchGuard.js
│   │   │       │   ├── zh-cn
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   └── zh-tw
│   │   │       │       └── diagnosticMessages.generated.json
│   │   │       ├── LICENSE.txt
│   │   │       ├── package.json
│   │   │       ├── README.md
│   │   │       ├── SECURITY.md
│   │   │       └── ThirdPartyNoticeText.txt
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   ├── CodeEditor.tsx
│   │   │   ├── lib
│   │   │   │   ├── eval-component.ts
│   │   │   │   ├── jsx-transform.ts
│   │   │   │   ├── linter.ts
│   │   │   │   └── tokenizer.ts
│   │   │   ├── main.tsx
│   │   │   ├── Preview.tsx
│   │   │   └── StatusBar.tsx
│   │   └── tsconfig.json
│   ├── playground-fix
│   │   ├── conf.lua
│   │   ├── dist
│   │   │   └── playground-fix
│   │   ├── ilovereact
│   │   │   ├── native
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── errorReporter.ts
│   │   │   │   │   ├── eventDispatcher.ts
│   │   │   │   │   ├── hostConfig.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Love2DApp.ts
│   │   │   │   │   ├── measureText.ts
│   │   │   │   │   ├── NativeBridge.ts
│   │   │   │   │   └── NativeRenderer.ts
│   │   │   │   └── tsconfig.json
│   │   │   └── shared
│   │   │       ├── package.json
│   │   │       ├── src
│   │   │       │   ├── animation.ts
│   │   │       │   ├── Badge.tsx
│   │   │       │   ├── bridge.ts
│   │   │       │   ├── Card.tsx
│   │   │       │   ├── Checkbox.tsx
│   │   │       │   ├── context.ts
│   │   │       │   ├── Divider.tsx
│   │   │       │   ├── FlatList.tsx
│   │   │       │   ├── FlexColumn.tsx
│   │   │       │   ├── FlexRow.tsx
│   │   │       │   ├── hooks.ts
│   │   │       │   ├── index.ts
│   │   │       │   ├── Modal.tsx
│   │   │       │   ├── Portal.tsx
│   │   │       │   ├── Pressable.tsx
│   │   │       │   ├── primitives.tsx
│   │   │       │   ├── Radio.tsx
│   │   │       │   ├── ScrollView.tsx
│   │   │       │   ├── Select.tsx
│   │   │       │   ├── Slider.tsx
│   │   │       │   ├── Spacer.tsx
│   │   │       │   ├── Switch.tsx
│   │   │       │   ├── TextEditor.tsx
│   │   │       │   ├── TextInput.tsx
│   │   │       │   └── types.ts
│   │   │       └── tsconfig.json
│   │   ├── lib
│   │   │   └── libquickjs.so
│   │   ├── lua
│   │   │   ├── bridge_fs.lua
│   │   │   ├── bridge_quickjs.lua
│   │   │   ├── errors.lua
│   │   │   ├── events.lua
│   │   │   ├── focus.lua
│   │   │   ├── images.lua
│   │   │   ├── init.lua
│   │   │   ├── inspector.lua
│   │   │   ├── layout.lua
│   │   │   ├── measure.lua
│   │   │   ├── painter.lua
│   │   │   ├── screenshot.lua
│   │   │   ├── target_love2d.lua
│   │   │   ├── texteditor.lua
│   │   │   ├── tree.lua
│   │   │   └── zindex.lua
│   │   ├── main.lua
│   │   ├── node_modules
│   │   │   ├── csstype
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js.flow
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── @esbuild
│   │   │   │   └── linux-x64
│   │   │   │       ├── bin
│   │   │   │       │   └── esbuild
│   │   │   │       ├── package.json
│   │   │   │       └── README.md
│   │   │   ├── esbuild
│   │   │   │   ├── bin
│   │   │   │   │   └── esbuild
│   │   │   │   ├── install.js
│   │   │   │   ├── lib
│   │   │   │   │   ├── main.d.ts
│   │   │   │   │   └── main.js
│   │   │   │   ├── LICENSE.md
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── js-tokens
│   │   │   │   ├── CHANGELOG.md
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   └── README.md
│   │   │   ├── loose-envify
│   │   │   │   ├── cli.js
│   │   │   │   ├── custom.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── loose-envify.js
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── replace.js
│   │   │   ├── react
│   │   │   │   ├── cjs
│   │   │   │   │   ├── react.development.js
│   │   │   │   │   ├── react-jsx-dev-runtime.development.js
│   │   │   │   │   ├── react-jsx-dev-runtime.production.min.js
│   │   │   │   │   ├── react-jsx-dev-runtime.profiling.min.js
│   │   │   │   │   ├── react-jsx-runtime.development.js
│   │   │   │   │   ├── react-jsx-runtime.production.min.js
│   │   │   │   │   ├── react-jsx-runtime.profiling.min.js
│   │   │   │   │   ├── react.production.min.js
│   │   │   │   │   ├── react.shared-subset.development.js
│   │   │   │   │   └── react.shared-subset.production.min.js
│   │   │   │   ├── index.js
│   │   │   │   ├── jsx-dev-runtime.js
│   │   │   │   ├── jsx-runtime.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── react.shared-subset.js
│   │   │   │   ├── README.md
│   │   │   │   └── umd
│   │   │   │       ├── react.development.js
│   │   │   │       ├── react.production.min.js
│   │   │   │       └── react.profiling.min.js
│   │   │   ├── react-reconciler
│   │   │   │   ├── cjs
│   │   │   │   │   ├── react-reconciler-constants.development.js
│   │   │   │   │   ├── react-reconciler-constants.production.min.js
│   │   │   │   │   ├── react-reconciler.development.js
│   │   │   │   │   ├── react-reconciler.production.min.js
│   │   │   │   │   ├── react-reconciler.profiling.min.js
│   │   │   │   │   ├── react-reconciler-reflection.development.js
│   │   │   │   │   └── react-reconciler-reflection.production.min.js
│   │   │   │   ├── constants.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── reflection.js
│   │   │   ├── scheduler
│   │   │   │   ├── cjs
│   │   │   │   │   ├── scheduler.development.js
│   │   │   │   │   ├── scheduler.production.min.js
│   │   │   │   │   ├── scheduler-unstable_mock.development.js
│   │   │   │   │   ├── scheduler-unstable_mock.production.min.js
│   │   │   │   │   ├── scheduler-unstable_post_task.development.js
│   │   │   │   │   └── scheduler-unstable_post_task.production.min.js
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   ├── umd
│   │   │   │   │   ├── scheduler.development.js
│   │   │   │   │   ├── scheduler.production.min.js
│   │   │   │   │   ├── scheduler.profiling.min.js
│   │   │   │   │   ├── scheduler-unstable_mock.development.js
│   │   │   │   │   └── scheduler-unstable_mock.production.min.js
│   │   │   │   ├── unstable_mock.js
│   │   │   │   └── unstable_post_task.js
│   │   │   ├── @types
│   │   │   │   ├── prop-types
│   │   │   │   │   ├── index.d.ts
│   │   │   │   │   ├── LICENSE
│   │   │   │   │   ├── package.json
│   │   │   │   │   └── README.md
│   │   │   │   └── react
│   │   │   │       ├── canary.d.ts
│   │   │   │       ├── experimental.d.ts
│   │   │   │       ├── global.d.ts
│   │   │   │       ├── index.d.ts
│   │   │   │       ├── jsx-dev-runtime.d.ts
│   │   │   │       ├── jsx-runtime.d.ts
│   │   │   │       ├── LICENSE
│   │   │   │       ├── package.json
│   │   │   │       ├── README.md
│   │   │   │       └── ts5.0
│   │   │   │           ├── canary.d.ts
│   │   │   │           ├── experimental.d.ts
│   │   │   │           ├── global.d.ts
│   │   │   │           ├── index.d.ts
│   │   │   │           ├── jsx-dev-runtime.d.ts
│   │   │   │           └── jsx-runtime.d.ts
│   │   │   └── typescript
│   │   │       ├── bin
│   │   │       │   ├── tsc
│   │   │       │   └── tsserver
│   │   │       ├── lib
│   │   │       │   ├── cs
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── de
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── es
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── fr
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── it
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ja
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ko
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── lib.decorators.d.ts
│   │   │       │   ├── lib.decorators.legacy.d.ts
│   │   │       │   ├── lib.dom.asynciterable.d.ts
│   │   │       │   ├── lib.dom.d.ts
│   │   │       │   ├── lib.dom.iterable.d.ts
│   │   │       │   ├── lib.d.ts
│   │   │       │   ├── lib.es2015.collection.d.ts
│   │   │       │   ├── lib.es2015.core.d.ts
│   │   │       │   ├── lib.es2015.d.ts
│   │   │       │   ├── lib.es2015.generator.d.ts
│   │   │       │   ├── lib.es2015.iterable.d.ts
│   │   │       │   ├── lib.es2015.promise.d.ts
│   │   │       │   ├── lib.es2015.proxy.d.ts
│   │   │       │   ├── lib.es2015.reflect.d.ts
│   │   │       │   ├── lib.es2015.symbol.d.ts
│   │   │       │   ├── lib.es2015.symbol.wellknown.d.ts
│   │   │       │   ├── lib.es2016.array.include.d.ts
│   │   │       │   ├── lib.es2016.d.ts
│   │   │       │   ├── lib.es2016.full.d.ts
│   │   │       │   ├── lib.es2016.intl.d.ts
│   │   │       │   ├── lib.es2017.arraybuffer.d.ts
│   │   │       │   ├── lib.es2017.date.d.ts
│   │   │       │   ├── lib.es2017.d.ts
│   │   │       │   ├── lib.es2017.full.d.ts
│   │   │       │   ├── lib.es2017.intl.d.ts
│   │   │       │   ├── lib.es2017.object.d.ts
│   │   │       │   ├── lib.es2017.sharedmemory.d.ts
│   │   │       │   ├── lib.es2017.string.d.ts
│   │   │       │   ├── lib.es2017.typedarrays.d.ts
│   │   │       │   ├── lib.es2018.asyncgenerator.d.ts
│   │   │       │   ├── lib.es2018.asynciterable.d.ts
│   │   │       │   ├── lib.es2018.d.ts
│   │   │       │   ├── lib.es2018.full.d.ts
│   │   │       │   ├── lib.es2018.intl.d.ts
│   │   │       │   ├── lib.es2018.promise.d.ts
│   │   │       │   ├── lib.es2018.regexp.d.ts
│   │   │       │   ├── lib.es2019.array.d.ts
│   │   │       │   ├── lib.es2019.d.ts
│   │   │       │   ├── lib.es2019.full.d.ts
│   │   │       │   ├── lib.es2019.intl.d.ts
│   │   │       │   ├── lib.es2019.object.d.ts
│   │   │       │   ├── lib.es2019.string.d.ts
│   │   │       │   ├── lib.es2019.symbol.d.ts
│   │   │       │   ├── lib.es2020.bigint.d.ts
│   │   │       │   ├── lib.es2020.date.d.ts
│   │   │       │   ├── lib.es2020.d.ts
│   │   │       │   ├── lib.es2020.full.d.ts
│   │   │       │   ├── lib.es2020.intl.d.ts
│   │   │       │   ├── lib.es2020.number.d.ts
│   │   │       │   ├── lib.es2020.promise.d.ts
│   │   │       │   ├── lib.es2020.sharedmemory.d.ts
│   │   │       │   ├── lib.es2020.string.d.ts
│   │   │       │   ├── lib.es2020.symbol.wellknown.d.ts
│   │   │       │   ├── lib.es2021.d.ts
│   │   │       │   ├── lib.es2021.full.d.ts
│   │   │       │   ├── lib.es2021.intl.d.ts
│   │   │       │   ├── lib.es2021.promise.d.ts
│   │   │       │   ├── lib.es2021.string.d.ts
│   │   │       │   ├── lib.es2021.weakref.d.ts
│   │   │       │   ├── lib.es2022.array.d.ts
│   │   │       │   ├── lib.es2022.d.ts
│   │   │       │   ├── lib.es2022.error.d.ts
│   │   │       │   ├── lib.es2022.full.d.ts
│   │   │       │   ├── lib.es2022.intl.d.ts
│   │   │       │   ├── lib.es2022.object.d.ts
│   │   │       │   ├── lib.es2022.regexp.d.ts
│   │   │       │   ├── lib.es2022.string.d.ts
│   │   │       │   ├── lib.es2023.array.d.ts
│   │   │       │   ├── lib.es2023.collection.d.ts
│   │   │       │   ├── lib.es2023.d.ts
│   │   │       │   ├── lib.es2023.full.d.ts
│   │   │       │   ├── lib.es2023.intl.d.ts
│   │   │       │   ├── lib.es2024.arraybuffer.d.ts
│   │   │       │   ├── lib.es2024.collection.d.ts
│   │   │       │   ├── lib.es2024.d.ts
│   │   │       │   ├── lib.es2024.full.d.ts
│   │   │       │   ├── lib.es2024.object.d.ts
│   │   │       │   ├── lib.es2024.promise.d.ts
│   │   │       │   ├── lib.es2024.regexp.d.ts
│   │   │       │   ├── lib.es2024.sharedmemory.d.ts
│   │   │       │   ├── lib.es2024.string.d.ts
│   │   │       │   ├── lib.es5.d.ts
│   │   │       │   ├── lib.es6.d.ts
│   │   │       │   ├── lib.esnext.array.d.ts
│   │   │       │   ├── lib.esnext.collection.d.ts
│   │   │       │   ├── lib.esnext.decorators.d.ts
│   │   │       │   ├── lib.esnext.disposable.d.ts
│   │   │       │   ├── lib.esnext.d.ts
│   │   │       │   ├── lib.esnext.error.d.ts
│   │   │       │   ├── lib.esnext.float16.d.ts
│   │   │       │   ├── lib.esnext.full.d.ts
│   │   │       │   ├── lib.esnext.intl.d.ts
│   │   │       │   ├── lib.esnext.iterator.d.ts
│   │   │       │   ├── lib.esnext.promise.d.ts
│   │   │       │   ├── lib.esnext.sharedmemory.d.ts
│   │   │       │   ├── lib.scripthost.d.ts
│   │   │       │   ├── lib.webworker.asynciterable.d.ts
│   │   │       │   ├── lib.webworker.d.ts
│   │   │       │   ├── lib.webworker.importscripts.d.ts
│   │   │       │   ├── lib.webworker.iterable.d.ts
│   │   │       │   ├── pl
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── pt-br
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── ru
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── tr
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   ├── _tsc.js
│   │   │       │   ├── tsc.js
│   │   │       │   ├── _tsserver.js
│   │   │       │   ├── tsserver.js
│   │   │       │   ├── tsserverlibrary.d.ts
│   │   │       │   ├── tsserverlibrary.js
│   │   │       │   ├── typescript.d.ts
│   │   │       │   ├── typescript.js
│   │   │       │   ├── typesMap.json
│   │   │       │   ├── _typingsInstaller.js
│   │   │       │   ├── typingsInstaller.js
│   │   │       │   ├── watchGuard.js
│   │   │       │   ├── zh-cn
│   │   │       │   │   └── diagnosticMessages.generated.json
│   │   │       │   └── zh-tw
│   │   │       │       └── diagnosticMessages.generated.json
│   │   │       ├── LICENSE.txt
│   │   │       ├── package.json
│   │   │       ├── README.md
│   │   │       ├── SECURITY.md
│   │   │       └── ThirdPartyNoticeText.txt
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   ├── lib
│   │   │   │   ├── eval-component.ts
│   │   │   │   ├── jsx-transform.ts
│   │   │   │   ├── linter.ts
│   │   │   │   └── tokenizer.ts
│   │   │   ├── main.tsx
│   │   │   ├── Preview.tsx
│   │   │   └── StatusBar.tsx
│   │   └── tsconfig.json
│   ├── shared-components.tsx
│   ├── storybook
│   │   ├── bundle.js
│   │   ├── dist
│   │   │   ├── storybook
│   │   │   └── storybook.js
│   │   ├── ilovereact
│   │   │   ├── components
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── Badge
│   │   │   │   │   │   ├── Badge.story.tsx
│   │   │   │   │   │   └── Badge.tsx
│   │   │   │   │   ├── Card
│   │   │   │   │   │   ├── Card.story.tsx
│   │   │   │   │   │   └── Card.tsx
│   │   │   │   │   ├── Divider
│   │   │   │   │   │   ├── Divider.story.tsx
│   │   │   │   │   │   └── Divider.tsx
│   │   │   │   │   ├── FlexColumn
│   │   │   │   │   │   ├── FlexColumn.story.tsx
│   │   │   │   │   │   └── FlexColumn.tsx
│   │   │   │   │   ├── FlexRow
│   │   │   │   │   │   ├── FlexRow.story.tsx
│   │   │   │   │   │   └── FlexRow.tsx
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Spacer
│   │   │   │   │   │   ├── Spacer.story.tsx
│   │   │   │   │   │   └── Spacer.tsx
│   │   │   │   │   └── stories.ts
│   │   │   │   └── tsconfig.json
│   │   │   ├── native
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── errorReporter.ts
│   │   │   │   │   ├── eventDispatcher.ts
│   │   │   │   │   ├── hostConfig.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Love2DApp.ts
│   │   │   │   │   ├── measureText.ts
│   │   │   │   │   ├── NativeBridge.ts
│   │   │   │   │   └── NativeRenderer.ts
│   │   │   │   └── tsconfig.json
│   │   │   ├── router
│   │   │   │   ├── package.json
│   │   │   │   └── src
│   │   │   │       ├── components.tsx
│   │   │   │       ├── context.tsx
│   │   │   │       ├── history.ts
│   │   │   │       ├── index.ts
│   │   │   │       ├── matcher.ts
│   │   │   │       └── types.ts
│   │   │   ├── shared
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── animation.ts
│   │   │   │   │   ├── Badge.tsx
│   │   │   │   │   ├── BarChart.tsx
│   │   │   │   │   ├── Breadcrumbs.tsx
│   │   │   │   │   ├── bridge.ts
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Checkbox.tsx
│   │   │   │   │   ├── CodeBlock.tsx
│   │   │   │   │   ├── colors.ts
│   │   │   │   │   ├── context.ts
│   │   │   │   │   ├── DebugOverlay.tsx
│   │   │   │   │   ├── Divider.tsx
│   │   │   │   │   ├── FlatList.tsx
│   │   │   │   │   ├── FlexColumn.tsx
│   │   │   │   │   ├── FlexRow.tsx
│   │   │   │   │   ├── hooks.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── NavPanel.tsx
│   │   │   │   │   ├── Portal.tsx
│   │   │   │   │   ├── Pressable.tsx
│   │   │   │   │   ├── primitives.tsx
│   │   │   │   │   ├── ProgressBar.tsx
│   │   │   │   │   ├── Radio.tsx
│   │   │   │   │   ├── ScrollView.tsx
│   │   │   │   │   ├── Select.tsx
│   │   │   │   │   ├── Slider.tsx
│   │   │   │   │   ├── Spacer.tsx
│   │   │   │   │   ├── Sparkline.tsx
│   │   │   │   │   ├── Switch.tsx
│   │   │   │   │   ├── Table.tsx
│   │   │   │   │   ├── Tabs.tsx
│   │   │   │   │   ├── TextEditor.tsx
│   │   │   │   │   ├── TextInput.tsx
│   │   │   │   │   ├── Toolbar.tsx
│   │   │   │   │   ├── types.ts
│   │   │   │   │   └── useDebug.ts
│   │   │   │   └── tsconfig.json
│   │   │   └── storage
│   │   │       ├── package.json
│   │   │       └── src
│   │   │           ├── adapters
│   │   │           │   ├── love2d-files.ts
│   │   │           │   ├── memory.ts
│   │   │           │   ├── terminal-sqlite.ts
│   │   │           │   └── web.ts
│   │   │           ├── crud.ts
│   │   │           ├── format.ts
│   │   │           ├── hooks.ts
│   │   │           ├── index.ts
│   │   │           ├── migrations.ts
│   │   │           ├── query.ts
│   │   │           ├── schema.ts
│   │   │           └── types.ts
│   │   ├── index.html
│   │   ├── lib
│   │   │   └── libquickjs.so
│   │   ├── love
│   │   │   ├── bundle.js
│   │   │   ├── conf.lua
│   │   │   ├── lib
│   │   │   │   └── libquickjs.so
│   │   │   └── main.lua
│   │   ├── lua
│   │   │   ├── animate.lua
│   │   │   ├── bridge_fs.lua
│   │   │   ├── bridge_quickjs.lua
│   │   │   ├── codeblock.lua
│   │   │   ├── console.lua
│   │   │   ├── errors.lua
│   │   │   ├── events.lua
│   │   │   ├── focus.lua
│   │   │   ├── http.lua
│   │   │   ├── images.lua
│   │   │   ├── init.lua
│   │   │   ├── inspector.lua
│   │   │   ├── json.lua
│   │   │   ├── layout.lua
│   │   │   ├── measure.lua
│   │   │   ├── painter.lua
│   │   │   ├── screenshot.lua
│   │   │   ├── storage.lua
│   │   │   ├── target_love2d.lua
│   │   │   ├── texteditor.lua
│   │   │   ├── tree.lua
│   │   │   └── zindex.lua
│   │   └── src
│   │       ├── App.tsx
│   │       ├── docs
│   │       │   ├── CodeBlock.tsx
│   │       │   ├── DocPage.tsx
│   │       │   ├── DocsFontScale.tsx
│   │       │   ├── DocsSidebar.tsx
│   │       │   ├── DocsViewer.tsx
│   │       │   ├── ExampleCard.tsx
│   │       │   └── MetadataBadges.tsx
│   │       ├── generated
│   │       │   └── content.json
│   │       ├── main.tsx
│   │       ├── native-main.tsx
│   │       ├── NativePanel.tsx
│   │       ├── stories
│   │       │   ├── AnimationSpring.tsx
│   │       │   ├── AnimationTiming.tsx
│   │       │   ├── AppShellDemo.tsx
│   │       │   ├── AspectRatio.tsx
│   │       │   ├── AutoSizeBasic.tsx
│   │       │   ├── BarChartStory.tsx
│   │       │   ├── BlockTestStory.tsx
│   │       │   ├── BorderRadius.tsx
│   │       │   ├── BoxBasic.tsx
│   │       │   ├── BoxNested.tsx
│   │       │   ├── BreadcrumbsStory.tsx
│   │       │   ├── CheckboxStory.tsx
│   │       │   ├── DataDashboardDemo.tsx
│   │       │   ├── ErrorTest.tsx
│   │       │   ├── FetchStory.tsx
│   │       │   ├── FlexColumn.tsx
│   │       │   ├── FlexRow.tsx
│   │       │   ├── FlexShrink.tsx
│   │       │   ├── FlexWrap.tsx
│   │       │   ├── Gradient.tsx
│   │       │   ├── ImageBasic.tsx
│   │       │   ├── index.ts
│   │       │   ├── LintTest.tsx
│   │       │   ├── NavPanelStory.tsx
│   │       │   ├── NeofetchDemo.tsx
│   │       │   ├── Opacity.tsx
│   │       │   ├── OverflowStress.tsx
│   │       │   ├── PaddingMargin.tsx
│   │       │   ├── PerSideBorder.tsx
│   │       │   ├── PressableStory.tsx
│   │       │   ├── ProgressBarStory.tsx
│   │       │   ├── RadioStory.tsx
│   │       │   ├── ScrollViewStory.tsx
│   │       │   ├── SelectStory.tsx
│   │       │   ├── SettingsDemo.tsx
│   │       │   ├── Shadow.tsx
│   │       │   ├── SliderStory.tsx
│   │       │   ├── SparklineStory.tsx
│   │       │   ├── SwitchStory.tsx
│   │       │   ├── TableStory.tsx
│   │       │   ├── TabsStory.tsx
│   │       │   ├── TextDecoration.tsx
│   │       │   ├── TextEditorStory.tsx
│   │       │   ├── TextStyles.tsx
│   │       │   ├── TextTruncation.tsx
│   │       │   ├── ToolbarStory.tsx
│   │       │   ├── Transform.tsx
│   │       │   ├── WeatherDemo.tsx
│   │       │   └── ZIndex.tsx
│   │       └── StoryBridge.ts
│   ├── terminal-demo
│   │   ├── dist
│   │   │   └── main.js
│   │   └── src
│   │       ├── App.tsx
│   │       └── main.tsx
│   └── web-overlay
│       ├── dist
│       ├── index.html
│       └── src
│           └── main.tsx
├── ilovereact-dev-tooling.skill
├── INSPECTOR-QOL.md
├── less
├── LLMS_TXT_STRATEGY.md
├── logo.png
├── lua
│   ├── animate.lua
│   ├── bridge_fs.lua
│   ├── bridge_quickjs.lua
│   ├── codeblock.lua
│   ├── console.lua
│   ├── errors.lua
│   ├── events.lua
│   ├── focus.lua
│   ├── http.lua
│   ├── images.lua
│   ├── init.lua
│   ├── inspector.lua
│   ├── json.lua
│   ├── layout.lua
│   ├── measure.lua
│   ├── painter.lua
│   ├── screenshot.lua
│   ├── storage.lua
│   ├── target_love2d.lua
│   ├── texteditor.lua
│   ├── tree.lua
│   └── zindex.lua
├── lua-best-practices.skill
├── Makefile
├── native
│   └── quickjs-shim
│       └── qjs_ffi_shim.c
├── node_modules
│   ├── csstype
│   │   ├── index.d.ts
│   │   ├── index.js.flow
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── @esbuild
│   │   └── linux-x64
│   │       ├── bin
│   │       │   └── esbuild
│   │       ├── package.json
│   │       └── README.md
│   ├── esbuild
│   │   ├── bin
│   │   │   └── esbuild
│   │   ├── install.js
│   │   ├── lib
│   │   │   ├── main.d.ts
│   │   │   └── main.js
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── @ilovereact
│   │   ├── awesome -> ../../packages/awesome
│   │   ├── cc -> ../../packages/cc
│   │   ├── components -> ../../packages/components
│   │   ├── core -> ../../packages/shared
│   │   ├── grid -> ../../packages/grid
│   │   ├── hs -> ../../packages/hs
│   │   ├── native -> ../../packages/native
│   │   ├── nvim -> ../../packages/nvim
│   │   ├── router -> ../../packages/router
│   │   ├── storage -> ../../packages/storage
│   │   ├── terminal -> ../../packages/terminal
│   │   └── web -> ../../packages/web
│   ├── js-tokens
│   │   ├── CHANGELOG.md
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── loose-envify
│   │   ├── cli.js
│   │   ├── custom.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── loose-envify.js
│   │   ├── package.json
│   │   ├── README.md
│   │   └── replace.js
│   ├── react
│   │   ├── cjs
│   │   │   ├── react.development.js
│   │   │   ├── react-jsx-dev-runtime.development.js
│   │   │   ├── react-jsx-dev-runtime.production.min.js
│   │   │   ├── react-jsx-dev-runtime.profiling.min.js
│   │   │   ├── react-jsx-runtime.development.js
│   │   │   ├── react-jsx-runtime.production.min.js
│   │   │   ├── react-jsx-runtime.profiling.min.js
│   │   │   ├── react.production.min.js
│   │   │   ├── react.shared-subset.development.js
│   │   │   └── react.shared-subset.production.min.js
│   │   ├── index.js
│   │   ├── jsx-dev-runtime.js
│   │   ├── jsx-runtime.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── react.shared-subset.js
│   │   ├── README.md
│   │   └── umd
│   │       ├── react.development.js
│   │       ├── react.production.min.js
│   │       └── react.profiling.min.js
│   ├── react-dom
│   │   ├── cjs
│   │   │   ├── react-dom.development.js
│   │   │   ├── react-dom.production.min.js
│   │   │   ├── react-dom.profiling.min.js
│   │   │   ├── react-dom-server.browser.development.js
│   │   │   ├── react-dom-server.browser.production.min.js
│   │   │   ├── react-dom-server-legacy.browser.development.js
│   │   │   ├── react-dom-server-legacy.browser.production.min.js
│   │   │   ├── react-dom-server-legacy.node.development.js
│   │   │   ├── react-dom-server-legacy.node.production.min.js
│   │   │   ├── react-dom-server.node.development.js
│   │   │   ├── react-dom-server.node.production.min.js
│   │   │   ├── react-dom-test-utils.development.js
│   │   │   └── react-dom-test-utils.production.min.js
│   │   ├── client.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── profiling.js
│   │   ├── README.md
│   │   ├── server.browser.js
│   │   ├── server.js
│   │   ├── server.node.js
│   │   ├── test-utils.js
│   │   └── umd
│   │       ├── react-dom.development.js
│   │       ├── react-dom.production.min.js
│   │       ├── react-dom.profiling.min.js
│   │       ├── react-dom-server.browser.development.js
│   │       ├── react-dom-server.browser.production.min.js
│   │       ├── react-dom-server-legacy.browser.development.js
│   │       ├── react-dom-server-legacy.browser.production.min.js
│   │       ├── react-dom-test-utils.development.js
│   │       └── react-dom-test-utils.production.min.js
│   ├── @react-love
│   ├── react-reconciler
│   │   ├── cjs
│   │   │   ├── react-reconciler-constants.development.js
│   │   │   ├── react-reconciler-constants.production.min.js
│   │   │   ├── react-reconciler.development.js
│   │   │   ├── react-reconciler.production.min.js
│   │   │   ├── react-reconciler.profiling.min.js
│   │   │   ├── react-reconciler-reflection.development.js
│   │   │   └── react-reconciler-reflection.production.min.js
│   │   ├── constants.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── reflection.js
│   ├── scheduler
│   │   ├── cjs
│   │   │   ├── scheduler.development.js
│   │   │   ├── scheduler.production.min.js
│   │   │   ├── scheduler-unstable_mock.development.js
│   │   │   ├── scheduler-unstable_mock.production.min.js
│   │   │   ├── scheduler-unstable_post_task.development.js
│   │   │   └── scheduler-unstable_post_task.production.min.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── umd
│   │   │   ├── scheduler.development.js
│   │   │   ├── scheduler.production.min.js
│   │   │   ├── scheduler.profiling.min.js
│   │   │   ├── scheduler-unstable_mock.development.js
│   │   │   └── scheduler-unstable_mock.production.min.js
│   │   ├── unstable_mock.js
│   │   └── unstable_post_task.js
│   ├── @types
│   │   ├── node
│   │   │   ├── assert
│   │   │   │   └── strict.d.ts
│   │   │   ├── assert.d.ts
│   │   │   ├── async_hooks.d.ts
│   │   │   ├── buffer.buffer.d.ts
│   │   │   ├── buffer.d.ts
│   │   │   ├── child_process.d.ts
│   │   │   ├── cluster.d.ts
│   │   │   ├── compatibility
│   │   │   │   └── iterators.d.ts
│   │   │   ├── console.d.ts
│   │   │   ├── constants.d.ts
│   │   │   ├── crypto.d.ts
│   │   │   ├── dgram.d.ts
│   │   │   ├── diagnostics_channel.d.ts
│   │   │   ├── dns
│   │   │   │   └── promises.d.ts
│   │   │   ├── dns.d.ts
│   │   │   ├── domain.d.ts
│   │   │   ├── events.d.ts
│   │   │   ├── fs
│   │   │   │   └── promises.d.ts
│   │   │   ├── fs.d.ts
│   │   │   ├── globals.d.ts
│   │   │   ├── globals.typedarray.d.ts
│   │   │   ├── http2.d.ts
│   │   │   ├── http.d.ts
│   │   │   ├── https.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── inspector
│   │   │   │   └── promises.d.ts
│   │   │   ├── inspector.d.ts
│   │   │   ├── inspector.generated.d.ts
│   │   │   ├── LICENSE
│   │   │   ├── module.d.ts
│   │   │   ├── net.d.ts
│   │   │   ├── os.d.ts
│   │   │   ├── package.json
│   │   │   ├── path
│   │   │   │   ├── posix.d.ts
│   │   │   │   └── win32.d.ts
│   │   │   ├── path.d.ts
│   │   │   ├── perf_hooks.d.ts
│   │   │   ├── process.d.ts
│   │   │   ├── punycode.d.ts
│   │   │   ├── querystring.d.ts
│   │   │   ├── quic.d.ts
│   │   │   ├── readline
│   │   │   │   └── promises.d.ts
│   │   │   ├── readline.d.ts
│   │   │   ├── README.md
│   │   │   ├── repl.d.ts
│   │   │   ├── sea.d.ts
│   │   │   ├── sqlite.d.ts
│   │   │   ├── stream
│   │   │   │   ├── consumers.d.ts
│   │   │   │   ├── promises.d.ts
│   │   │   │   └── web.d.ts
│   │   │   ├── stream.d.ts
│   │   │   ├── string_decoder.d.ts
│   │   │   ├── test
│   │   │   │   └── reporters.d.ts
│   │   │   ├── test.d.ts
│   │   │   ├── timers
│   │   │   │   └── promises.d.ts
│   │   │   ├── timers.d.ts
│   │   │   ├── tls.d.ts
│   │   │   ├── trace_events.d.ts
│   │   │   ├── ts5.6
│   │   │   │   ├── buffer.buffer.d.ts
│   │   │   │   ├── compatibility
│   │   │   │   │   └── float16array.d.ts
│   │   │   │   ├── globals.typedarray.d.ts
│   │   │   │   └── index.d.ts
│   │   │   ├── ts5.7
│   │   │   │   ├── compatibility
│   │   │   │   │   └── float16array.d.ts
│   │   │   │   └── index.d.ts
│   │   │   ├── tty.d.ts
│   │   │   ├── url.d.ts
│   │   │   ├── util
│   │   │   │   └── types.d.ts
│   │   │   ├── util.d.ts
│   │   │   ├── v8.d.ts
│   │   │   ├── vm.d.ts
│   │   │   ├── wasi.d.ts
│   │   │   ├── web-globals
│   │   │   │   ├── abortcontroller.d.ts
│   │   │   │   ├── blob.d.ts
│   │   │   │   ├── console.d.ts
│   │   │   │   ├── crypto.d.ts
│   │   │   │   ├── domexception.d.ts
│   │   │   │   ├── encoding.d.ts
│   │   │   │   ├── events.d.ts
│   │   │   │   ├── fetch.d.ts
│   │   │   │   ├── importmeta.d.ts
│   │   │   │   ├── messaging.d.ts
│   │   │   │   ├── navigator.d.ts
│   │   │   │   ├── performance.d.ts
│   │   │   │   ├── storage.d.ts
│   │   │   │   ├── streams.d.ts
│   │   │   │   ├── timers.d.ts
│   │   │   │   └── url.d.ts
│   │   │   ├── worker_threads.d.ts
│   │   │   └── zlib.d.ts
│   │   ├── prop-types
│   │   │   ├── index.d.ts
│   │   │   ├── LICENSE
│   │   │   ├── package.json
│   │   │   └── README.md
│   │   ├── react
│   │   │   ├── canary.d.ts
│   │   │   ├── experimental.d.ts
│   │   │   ├── global.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── jsx-dev-runtime.d.ts
│   │   │   ├── jsx-runtime.d.ts
│   │   │   ├── LICENSE
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   └── ts5.0
│   │   │       ├── canary.d.ts
│   │   │       ├── experimental.d.ts
│   │   │       ├── global.d.ts
│   │   │       ├── index.d.ts
│   │   │       ├── jsx-dev-runtime.d.ts
│   │   │       └── jsx-runtime.d.ts
│   │   ├── react-dom
│   │   │   ├── canary.d.ts
│   │   │   ├── client.d.ts
│   │   │   ├── experimental.d.ts
│   │   │   ├── index.d.ts
│   │   │   ├── LICENSE
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   ├── server.d.ts
│   │   │   └── test-utils
│   │   │       └── index.d.ts
│   │   └── ws
│   │       ├── index.d.mts
│   │       ├── index.d.ts
│   │       ├── LICENSE
│   │       ├── package.json
│   │       └── README.md
│   ├── typescript
│   │   ├── bin
│   │   │   ├── tsc
│   │   │   └── tsserver
│   │   ├── lib
│   │   │   ├── cs
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── de
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── es
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── fr
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── it
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── ja
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── ko
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── lib.decorators.d.ts
│   │   │   ├── lib.decorators.legacy.d.ts
│   │   │   ├── lib.dom.asynciterable.d.ts
│   │   │   ├── lib.dom.d.ts
│   │   │   ├── lib.dom.iterable.d.ts
│   │   │   ├── lib.d.ts
│   │   │   ├── lib.es2015.collection.d.ts
│   │   │   ├── lib.es2015.core.d.ts
│   │   │   ├── lib.es2015.d.ts
│   │   │   ├── lib.es2015.generator.d.ts
│   │   │   ├── lib.es2015.iterable.d.ts
│   │   │   ├── lib.es2015.promise.d.ts
│   │   │   ├── lib.es2015.proxy.d.ts
│   │   │   ├── lib.es2015.reflect.d.ts
│   │   │   ├── lib.es2015.symbol.d.ts
│   │   │   ├── lib.es2015.symbol.wellknown.d.ts
│   │   │   ├── lib.es2016.array.include.d.ts
│   │   │   ├── lib.es2016.d.ts
│   │   │   ├── lib.es2016.full.d.ts
│   │   │   ├── lib.es2016.intl.d.ts
│   │   │   ├── lib.es2017.arraybuffer.d.ts
│   │   │   ├── lib.es2017.date.d.ts
│   │   │   ├── lib.es2017.d.ts
│   │   │   ├── lib.es2017.full.d.ts
│   │   │   ├── lib.es2017.intl.d.ts
│   │   │   ├── lib.es2017.object.d.ts
│   │   │   ├── lib.es2017.sharedmemory.d.ts
│   │   │   ├── lib.es2017.string.d.ts
│   │   │   ├── lib.es2017.typedarrays.d.ts
│   │   │   ├── lib.es2018.asyncgenerator.d.ts
│   │   │   ├── lib.es2018.asynciterable.d.ts
│   │   │   ├── lib.es2018.d.ts
│   │   │   ├── lib.es2018.full.d.ts
│   │   │   ├── lib.es2018.intl.d.ts
│   │   │   ├── lib.es2018.promise.d.ts
│   │   │   ├── lib.es2018.regexp.d.ts
│   │   │   ├── lib.es2019.array.d.ts
│   │   │   ├── lib.es2019.d.ts
│   │   │   ├── lib.es2019.full.d.ts
│   │   │   ├── lib.es2019.intl.d.ts
│   │   │   ├── lib.es2019.object.d.ts
│   │   │   ├── lib.es2019.string.d.ts
│   │   │   ├── lib.es2019.symbol.d.ts
│   │   │   ├── lib.es2020.bigint.d.ts
│   │   │   ├── lib.es2020.date.d.ts
│   │   │   ├── lib.es2020.d.ts
│   │   │   ├── lib.es2020.full.d.ts
│   │   │   ├── lib.es2020.intl.d.ts
│   │   │   ├── lib.es2020.number.d.ts
│   │   │   ├── lib.es2020.promise.d.ts
│   │   │   ├── lib.es2020.sharedmemory.d.ts
│   │   │   ├── lib.es2020.string.d.ts
│   │   │   ├── lib.es2020.symbol.wellknown.d.ts
│   │   │   ├── lib.es2021.d.ts
│   │   │   ├── lib.es2021.full.d.ts
│   │   │   ├── lib.es2021.intl.d.ts
│   │   │   ├── lib.es2021.promise.d.ts
│   │   │   ├── lib.es2021.string.d.ts
│   │   │   ├── lib.es2021.weakref.d.ts
│   │   │   ├── lib.es2022.array.d.ts
│   │   │   ├── lib.es2022.d.ts
│   │   │   ├── lib.es2022.error.d.ts
│   │   │   ├── lib.es2022.full.d.ts
│   │   │   ├── lib.es2022.intl.d.ts
│   │   │   ├── lib.es2022.object.d.ts
│   │   │   ├── lib.es2022.regexp.d.ts
│   │   │   ├── lib.es2022.string.d.ts
│   │   │   ├── lib.es2023.array.d.ts
│   │   │   ├── lib.es2023.collection.d.ts
│   │   │   ├── lib.es2023.d.ts
│   │   │   ├── lib.es2023.full.d.ts
│   │   │   ├── lib.es2023.intl.d.ts
│   │   │   ├── lib.es2024.arraybuffer.d.ts
│   │   │   ├── lib.es2024.collection.d.ts
│   │   │   ├── lib.es2024.d.ts
│   │   │   ├── lib.es2024.full.d.ts
│   │   │   ├── lib.es2024.object.d.ts
│   │   │   ├── lib.es2024.promise.d.ts
│   │   │   ├── lib.es2024.regexp.d.ts
│   │   │   ├── lib.es2024.sharedmemory.d.ts
│   │   │   ├── lib.es2024.string.d.ts
│   │   │   ├── lib.es5.d.ts
│   │   │   ├── lib.es6.d.ts
│   │   │   ├── lib.esnext.array.d.ts
│   │   │   ├── lib.esnext.collection.d.ts
│   │   │   ├── lib.esnext.decorators.d.ts
│   │   │   ├── lib.esnext.disposable.d.ts
│   │   │   ├── lib.esnext.d.ts
│   │   │   ├── lib.esnext.error.d.ts
│   │   │   ├── lib.esnext.float16.d.ts
│   │   │   ├── lib.esnext.full.d.ts
│   │   │   ├── lib.esnext.intl.d.ts
│   │   │   ├── lib.esnext.iterator.d.ts
│   │   │   ├── lib.esnext.promise.d.ts
│   │   │   ├── lib.esnext.sharedmemory.d.ts
│   │   │   ├── lib.scripthost.d.ts
│   │   │   ├── lib.webworker.asynciterable.d.ts
│   │   │   ├── lib.webworker.d.ts
│   │   │   ├── lib.webworker.importscripts.d.ts
│   │   │   ├── lib.webworker.iterable.d.ts
│   │   │   ├── pl
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── pt-br
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── ru
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── tr
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   ├── _tsc.js
│   │   │   ├── tsc.js
│   │   │   ├── _tsserver.js
│   │   │   ├── tsserver.js
│   │   │   ├── tsserverlibrary.d.ts
│   │   │   ├── tsserverlibrary.js
│   │   │   ├── typescript.d.ts
│   │   │   ├── typescript.js
│   │   │   ├── typesMap.json
│   │   │   ├── _typingsInstaller.js
│   │   │   ├── typingsInstaller.js
│   │   │   ├── watchGuard.js
│   │   │   ├── zh-cn
│   │   │   │   └── diagnosticMessages.generated.json
│   │   │   └── zh-tw
│   │   │       └── diagnosticMessages.generated.json
│   │   ├── LICENSE.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   └── ThirdPartyNoticeText.txt
│   ├── undici-types
│   │   ├── agent.d.ts
│   │   ├── api.d.ts
│   │   ├── balanced-pool.d.ts
│   │   ├── cache.d.ts
│   │   ├── cache-interceptor.d.ts
│   │   ├── client.d.ts
│   │   ├── client-stats.d.ts
│   │   ├── connector.d.ts
│   │   ├── content-type.d.ts
│   │   ├── cookies.d.ts
│   │   ├── diagnostics-channel.d.ts
│   │   ├── dispatcher.d.ts
│   │   ├── env-http-proxy-agent.d.ts
│   │   ├── errors.d.ts
│   │   ├── eventsource.d.ts
│   │   ├── fetch.d.ts
│   │   ├── formdata.d.ts
│   │   ├── global-dispatcher.d.ts
│   │   ├── global-origin.d.ts
│   │   ├── h2c-client.d.ts
│   │   ├── handlers.d.ts
│   │   ├── header.d.ts
│   │   ├── index.d.ts
│   │   ├── interceptors.d.ts
│   │   ├── LICENSE
│   │   ├── mock-agent.d.ts
│   │   ├── mock-call-history.d.ts
│   │   ├── mock-client.d.ts
│   │   ├── mock-errors.d.ts
│   │   ├── mock-interceptor.d.ts
│   │   ├── mock-pool.d.ts
│   │   ├── package.json
│   │   ├── patch.d.ts
│   │   ├── pool.d.ts
│   │   ├── pool-stats.d.ts
│   │   ├── proxy-agent.d.ts
│   │   ├── readable.d.ts
│   │   ├── README.md
│   │   ├── retry-agent.d.ts
│   │   ├── retry-handler.d.ts
│   │   ├── snapshot-agent.d.ts
│   │   ├── util.d.ts
│   │   ├── utility.d.ts
│   │   ├── webidl.d.ts
│   │   └── websocket.d.ts
│   └── ws
│       ├── browser.js
│       ├── index.js
│       ├── lib
│       │   ├── buffer-util.js
│       │   ├── constants.js
│       │   ├── event-target.js
│       │   ├── extension.js
│       │   ├── limiter.js
│       │   ├── permessage-deflate.js
│       │   ├── receiver.js
│       │   ├── sender.js
│       │   ├── stream.js
│       │   ├── subprotocol.js
│       │   ├── validation.js
│       │   ├── websocket.js
│       │   └── websocket-server.js
│       ├── LICENSE
│       ├── package.json
│       ├── README.md
│       └── wrapper.mjs
├── package.json
├── package-lock.json
├── packages
│   ├── awesome
│   │   ├── package.json
│   │   └── src
│   │       ├── AwesomeServer.ts
│   │       └── index.ts
│   ├── cc
│   │   ├── package.json
│   │   └── src
│   │       ├── CCServer.ts
│   │       ├── index.ts
│   │       └── palette.ts
│   ├── components
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── Badge
│   │   │   │   ├── Badge.story.tsx
│   │   │   │   └── Badge.tsx
│   │   │   ├── Card
│   │   │   │   ├── Card.story.tsx
│   │   │   │   └── Card.tsx
│   │   │   ├── Divider
│   │   │   │   ├── Divider.story.tsx
│   │   │   │   └── Divider.tsx
│   │   │   ├── FlexColumn
│   │   │   │   ├── FlexColumn.story.tsx
│   │   │   │   └── FlexColumn.tsx
│   │   │   ├── FlexRow
│   │   │   │   ├── FlexRow.story.tsx
│   │   │   │   └── FlexRow.tsx
│   │   │   ├── index.ts
│   │   │   ├── Spacer
│   │   │   │   ├── Spacer.story.tsx
│   │   │   │   └── Spacer.tsx
│   │   │   └── stories.ts
│   │   └── tsconfig.json
│   ├── grid
│   │   ├── package.json
│   │   └── src
│   │       ├── flatten.ts
│   │       ├── index.ts
│   │       ├── layout.ts
│   │       ├── RenderServer.ts
│   │       └── transports
│   │           ├── stdio.ts
│   │           ├── types.ts
│   │           └── websocket.ts
│   ├── hs
│   │   ├── package.json
│   │   └── src
│   │       ├── HammerspoonServer.ts
│   │       └── index.ts
│   ├── native
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── errorReporter.ts
│   │   │   ├── eventDispatcher.ts
│   │   │   ├── hostConfig.ts
│   │   │   ├── index.ts
│   │   │   ├── Love2DApp.ts
│   │   │   ├── measureText.ts
│   │   │   ├── NativeBridge.ts
│   │   │   └── NativeRenderer.ts
│   │   └── tsconfig.json
│   ├── nvim
│   │   ├── package.json
│   │   └── src
│   │       ├── index.ts
│   │       └── NvimServer.ts
│   ├── router
│   │   ├── package.json
│   │   └── src
│   │       ├── components.tsx
│   │       ├── context.tsx
│   │       ├── history.ts
│   │       ├── index.ts
│   │       ├── matcher.ts
│   │       └── types.ts
│   ├── shared
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── animation.ts
│   │   │   ├── Badge.tsx
│   │   │   ├── BarChart.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   ├── bridge.ts
│   │   │   ├── Card.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── colors.ts
│   │   │   ├── context.ts
│   │   │   ├── DebugOverlay.tsx
│   │   │   ├── Divider.tsx
│   │   │   ├── FlatList.tsx
│   │   │   ├── FlexColumn.tsx
│   │   │   ├── FlexRow.tsx
│   │   │   ├── hooks.ts
│   │   │   ├── index.ts
│   │   │   ├── Modal.tsx
│   │   │   ├── NavPanel.tsx
│   │   │   ├── Portal.tsx
│   │   │   ├── Pressable.tsx
│   │   │   ├── primitives.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── Radio.tsx
│   │   │   ├── ScrollView.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Slider.tsx
│   │   │   ├── Spacer.tsx
│   │   │   ├── Sparkline.tsx
│   │   │   ├── Switch.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── TextEditor.tsx
│   │   │   ├── TextInput.tsx
│   │   │   ├── Toolbar.tsx
│   │   │   ├── types.ts
│   │   │   └── useDebug.ts
│   │   └── tsconfig.json
│   ├── storage
│   │   ├── package.json
│   │   └── src
│   │       ├── adapters
│   │       │   ├── love2d-files.ts
│   │       │   ├── memory.ts
│   │       │   ├── terminal-sqlite.ts
│   │       │   └── web.ts
│   │       ├── crud.ts
│   │       ├── format.ts
│   │       ├── hooks.ts
│   │       ├── index.ts
│   │       ├── migrations.ts
│   │       ├── query.ts
│   │       ├── schema.ts
│   │       └── types.ts
│   ├── terminal
│   │   ├── package.json
│   │   └── src
│   │       ├── ansi.ts
│   │       ├── index.ts
│   │       ├── input.ts
│   │       └── TerminalApp.ts
│   └── web
│       ├── package.json
│       ├── src
│       │   ├── CanvasBridge.ts
│       │   ├── index.ts
│       │   ├── LoveInstance.tsx
│       │   └── WebBridge.ts
│       └── tsconfig.json
├── packaging
│   ├── neofetch
│   │   ├── conf.lua
│   │   └── main.lua
│   └── storybook
│       ├── conf.lua
│       └── main.lua
├── quickjs
│   ├── amalgam.js
│   ├── api-test.c
│   ├── build
│   │   ├── api-test
│   │   ├── CMakeCache.txt
│   │   ├── CMakeFiles
│   │   │   ├── 3.31.6
│   │   │   │   ├── CMakeCCompiler.cmake
│   │   │   │   ├── CMakeDetermineCompilerABI_C.bin
│   │   │   │   ├── CMakeSystem.cmake
│   │   │   │   └── CompilerIdC
│   │   │   │       ├── a.out
│   │   │   │       ├── CMakeCCompilerId.c
│   │   │   │       └── tmp
│   │   │   ├── api-test.dir
│   │   │   │   ├── api-test.c.o
│   │   │   │   ├── api-test.c.o.d
│   │   │   │   ├── build.make
│   │   │   │   ├── cmake_clean.cmake
│   │   │   │   ├── compiler_depend.make
│   │   │   │   ├── compiler_depend.ts
│   │   │   │   ├── DependInfo.cmake
│   │   │   │   ├── depend.make
│   │   │   │   ├── flags.make
│   │   │   │   ├── link.d
│   │   │   │   ├── link.txt
│   │   │   │   └── progress.make
│   │   │   ├── cmake.check_cache
│   │   │   ├── CMakeConfigureLog.yaml
│   │   │   ├── CMakeDirectoryInformation.cmake
│   │   │   ├── CMakeScratch
│   │   │   ├── cutils.dir
│   │   │   │   ├── build.make
│   │   │   │   ├── cmake_clean.cmake
│   │   │   │   ├── cmake_clean_target.cmake
│   │   │   │   ├── compiler_depend.make
│   │   │   │   ├── compiler_depend.ts
│   │   │   │   ├── cutils.c.o
│   │   │   │   ├── cutils.c.o.d
│   │   │   │   ├── DependInfo.cmake
│   │   │   │   ├── depend.make
│   │   │   │   ├── flags.make
│   │   │   │   ├── link.txt
│   │   │   │   └── progress.make
│   │   │   ├── Export
│   │   │   │   └── d845a7c621bb08ce2ef18a5a1d23ba45
│   │   │   │       ├── qjsConfig.cmake
│   │   │   │       └── qjsConfig-release.cmake
│   │   │   ├── function_source.dir
│   │   │   │   ├── build.make
│   │   │   │   ├── cmake_clean.cmake
│   │   │   │   ├── compiler_depend.make
│   │   │   │   ├── compiler_depend.ts
│   │   │   │   ├── DependInfo.cmake
│   │   │   │   ├── depend.make
│   │   │   │   ├── flags.make
│   │   │   │   ├── gen
│   │   │   │   │   ├── function_source.c.o
│   │   │   │   │   └── function_source.c.o.d
│   │   │   │   ├── link.d
│   │   │   │   ├── link.txt
│   │   │   │   └── progress.make
│   │   │   ├── Makefile2
│   │   │   ├── Makefile.cmake
│   │   │   ├── pkgRedirects
│   │   │   ├── progress.marks
│   │   │   ├── qjsc.dir
│   │   │   │   ├── build.make
│   │   │   │   ├── cmake_clean.cmake
│   │   │   │   ├── compiler_depend.make
│   │   │   │   ├── compiler_depend.ts
│   │   │   │   ├── DependInfo.cmake
│   │   │   │   ├── depend.make
│   │   │   │   ├── flags.make
│   │   │   │   ├── link.d
│   │   │   │   ├── link.txt
│   │   │   │   ├── progress.make
│   │   │   │   ├── qjsc.c.o
│   │   │   │   └── qjsc.c.o.d
│   │   │   ├── qjs.dir
│   │   │   │   ├── build.make
│   │   │   │   ├── cmake_clean.cmake
│   │   │   │   ├── compiler_depend.make
│   │   │   │   ├── compiler_depend.ts
│   │   │   │   ├── DependInfo.cmake
│   │   │   │   ├── depend.make
│   │   │   │   ├── dtoa.c.o
│   │   │   │   ├── dtoa.c.o.d
│   │   │   │   ├── flags.make
│   │   │   │   ├── libregexp.c.o
│   │   │   │   ├── libregexp.c.o.d
│   │   │   │   ├── libunicode.c.o
│   │   │   │   ├── libunicode.c.o.d
│   │   │   │   ├── link.d
│   │   │   │   ├── link.txt
│   │   │   │   ├── progress.make
│   │   │   │   ├── quickjs.c.o
│   │   │   │   └── quickjs.c.o.d
│   │   │   ├── qjs_exe.dir
│   │   │   │   ├── build.make
│   │   │   │   ├── cmake_clean.cmake
│   │   │   │   ├── compiler_depend.make
│   │   │   │   ├── compiler_depend.ts
│   │   │   │   ├── DependInfo.cmake
│   │   │   │   ├── depend.make
│   │   │   │   ├── flags.make
│   │   │   │   ├── gen
│   │   │   │   │   ├── repl.c.o
│   │   │   │   │   ├── repl.c.o.d
│   │   │   │   │   ├── standalone.c.o
│   │   │   │   │   └── standalone.c.o.d
│   │   │   │   ├── link.d
│   │   │   │   ├── link.txt
│   │   │   │   ├── progress.make
│   │   │   │   ├── qjs.c.o
│   │   │   │   └── qjs.c.o.d
│   │   │   ├── qjs-libc.dir
│   │   │   │   ├── build.make
│   │   │   │   ├── cmake_clean.cmake
│   │   │   │   ├── cmake_clean_target.cmake
│   │   │   │   ├── compiler_depend.make
│   │   │   │   ├── compiler_depend.ts
│   │   │   │   ├── DependInfo.cmake
│   │   │   │   ├── depend.make
│   │   │   │   ├── flags.make
│   │   │   │   ├── link.txt
│   │   │   │   ├── progress.make
│   │   │   │   ├── quickjs-libc.c.o
│   │   │   │   └── quickjs-libc.c.o.d
│   │   │   ├── run-test262.dir
│   │   │   │   ├── build.make
│   │   │   │   ├── cmake_clean.cmake
│   │   │   │   ├── compiler_depend.make
│   │   │   │   ├── compiler_depend.ts
│   │   │   │   ├── DependInfo.cmake
│   │   │   │   ├── depend.make
│   │   │   │   ├── flags.make
│   │   │   │   ├── link.d
│   │   │   │   ├── link.txt
│   │   │   │   ├── progress.make
│   │   │   │   ├── run-test262.c.o
│   │   │   │   └── run-test262.c.o.d
│   │   │   ├── TargetDirectories.txt
│   │   │   └── unicode_gen.dir
│   │   │       ├── build.make
│   │   │       ├── cmake_clean.cmake
│   │   │       ├── compiler_depend.make
│   │   │       ├── compiler_depend.ts
│   │   │       ├── DependInfo.cmake
│   │   │       ├── depend.make
│   │   │       ├── flags.make
│   │   │       ├── link.txt
│   │   │       └── progress.make
│   │   ├── cmake_install.cmake
│   │   ├── function_source
│   │   ├── libcutils.a
│   │   ├── libqjs-libc.a
│   │   ├── libqjs.so -> libqjs.so.0
│   │   ├── libqjs.so.0 -> libqjs.so.0.11.0
│   │   ├── libqjs.so.0.11.0
│   │   ├── Makefile
│   │   ├── qjs
│   │   ├── qjsc
│   │   └── run-test262
│   ├── builtin-array-fromasync.h
│   ├── builtin-array-fromasync.js
│   ├── builtin-iterator-zip.h
│   ├── builtin-iterator-zip.js
│   ├── builtin-iterator-zip-keyed.h
│   ├── builtin-iterator-zip-keyed.js
│   ├── CMakeLists.txt
│   ├── ctest.c
│   ├── cutils.c
│   ├── cutils.h
│   ├── cxxtest.cc
│   ├── docs
│   │   ├── babel.config.js
│   │   ├── docs
│   │   │   ├── building.md
│   │   │   ├── cli.md
│   │   │   ├── developer-guide
│   │   │   │   ├── api.md
│   │   │   │   ├── _category_.json
│   │   │   │   ├── internals.md
│   │   │   │   └── intro.md
│   │   │   ├── diff.md
│   │   │   ├── es_features.md
│   │   │   ├── installation.md
│   │   │   ├── intro.md
│   │   │   ├── projects.md
│   │   │   ├── stdlib.md
│   │   │   └── supported_platforms.md
│   │   ├── docusaurus.config.js
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── sidebars.js
│   │   ├── src
│   │   │   └── css
│   │   │       └── custom.css
│   │   └── static
│   │       └── img
│   │           └── favicon.ico
│   ├── dtoa.c
│   ├── dtoa.h
│   ├── examples
│   │   ├── fib.c
│   │   ├── fib_module.js
│   │   ├── hello.js
│   │   ├── hello_module.js
│   │   ├── meson.build
│   │   ├── pi_bigint.js
│   │   ├── point.c
│   │   ├── test_fib.js
│   │   └── test_point.js
│   ├── fuzz.c
│   ├── gen
│   │   ├── function_source.c
│   │   ├── hello.c
│   │   ├── hello_module.c
│   │   ├── repl.c
│   │   ├── standalone.c
│   │   └── test_fib.c
│   ├── libquickjs_combined.so
│   ├── libquickjs.so
│   ├── libregexp.c
│   ├── libregexp.h
│   ├── libregexp-opcode.h
│   ├── libunicode.c
│   ├── libunicode.h
│   ├── libunicode-table.h
│   ├── LICENSE
│   ├── list.h
│   ├── Makefile
│   ├── meson.build
│   ├── meson_options.txt
│   ├── qjs.c
│   ├── qjsc.c
│   ├── qjs_ffi_shim.c
│   ├── qjs_ffi_shim.o
│   ├── qjs_ffi_shim.so
│   ├── qjs-wasi-reactor.c
│   ├── quickjs-atom.h
│   ├── quickjs.c
│   ├── quickjs-c-atomics.h
│   ├── quickjs.h
│   ├── quickjs-libc.c
│   ├── quickjs-libc.h
│   ├── quickjs-opcode.h
│   ├── README.md
│   ├── repl.js
│   ├── run-test262.c
│   ├── standalone.js
│   ├── test262
│   ├── test262.conf
│   ├── test262_errors.txt
│   ├── test262-fast.conf
│   ├── tests
│   │   ├── assert.js
│   │   ├── bug1221.js
│   │   ├── bug1296.js
│   │   ├── bug1297.js
│   │   ├── bug1301.js
│   │   ├── bug1302.js
│   │   ├── bug1305.js
│   │   ├── bug39
│   │   │   ├── 1.js
│   │   │   ├── 2.js
│   │   │   └── 3.js
│   │   ├── bug633
│   │   │   ├── 0.js
│   │   │   ├── 1.js
│   │   │   ├── 2.js
│   │   │   └── 3.js
│   │   ├── bug645
│   │   │   ├── 0.js
│   │   │   ├── 1.js
│   │   │   └── 2.js
│   │   ├── bug648.js
│   │   ├── bug652.js
│   │   ├── bug741.js
│   │   ├── bug775.js
│   │   ├── bug776.js
│   │   ├── bug832.js
│   │   ├── bug858.js
│   │   ├── bug904.js
│   │   ├── bug988.js
│   │   ├── bug999.js
│   │   ├── destructured-export.js
│   │   ├── detect_module
│   │   │   ├── 0.js
│   │   │   ├── 1.js
│   │   │   ├── 2.js
│   │   │   ├── 3.js
│   │   │   └── 4.js
│   │   ├── empty.js
│   │   ├── fixture_cyclic_import.js
│   │   ├── fixture_string_exports.js
│   │   ├── function_source.js
│   │   ├── microbench.js
│   │   ├── null_or_undefined.js
│   │   ├── str-pad-leak.js
│   │   ├── test_bigint.js
│   │   ├── test_bjson.js
│   │   ├── test_builtin.js
│   │   ├── test_closure.js
│   │   ├── test_cyclic_import.js
│   │   ├── test_domexception.js
│   │   ├── test_language.js
│   │   ├── test_loop.js
│   │   ├── test_queue_microtask.js
│   │   ├── test_std.js
│   │   ├── test_string_exports.js
│   │   ├── test_worker.js
│   │   └── test_worker_module.js
│   ├── tests.conf
│   ├── unicode_download.sh
│   ├── unicode_gen.c
│   └── unicode_gen_def.h
├── README.md
├── RESEARCH-FLUSH-EMPTY.md
├── RESEARCH-JSEVAL-HANG.md
├── research_runs
│   └── 2026-02-12__intrinsic-layout-sizing
│       └── angles
│           ├── 01_yoga_taffy_stretch.md
│           ├── 02_css_intrinsic_sizing.md
│           ├── 03_style_inheritance.md
│           ├── 04_text_measurement.md
│           ├── 05_react_native.md
│           ├── 06_inline_text_flow.md
│           ├── 07_default_styles.md
│           └── 10_migration_path.md
├── scripts
│   ├── codebase-snapshot.ts
│   └── docs
│       ├── build.ts
│       ├── parser.ts
│       ├── plaintext-renderer.ts
│       ├── types.ts
│       └── validate.ts
├── targets
│   ├── awesome
│   │   ├── ilovereact.lua
│   │   └── ws-bridge.js
│   ├── computercraft
│   │   └── startup.lua
│   ├── hammerspoon
│   │   └── ilovereact.lua
│   └── neovim
│       └── lua
│           └── ilovereact
│               ├── highlights.lua
│               ├── init.lua
│               └── renderer.lua
├── TARGETS.md
├── tree.md
├── tsconfig.base.json
├── venv
│   ├── bin
│   │   ├── activate
│   │   ├── activate.csh
│   │   ├── activate.fish
│   │   ├── Activate.ps1
│   │   ├── pip
│   │   ├── pip3
│   │   ├── pip3.13
│   │   ├── python -> python3.13
│   │   ├── python3 -> python3.13
│   │   └── python3.13 -> /home/linuxbrew/.linuxbrew/opt/python@3.13/bin/python3.13
│   ├── include
│   │   └── python3.13
│   ├── lib
│   │   └── python3.13
│   │       └── site-packages
│   │           ├── PIL
│   │           │   ├── _avif.cpython-313-x86_64-linux-gnu.so
│   │           │   ├── AvifImagePlugin.py
│   │           │   ├── _avif.pyi
│   │           │   ├── BdfFontFile.py
│   │           │   ├── _binary.py
│   │           │   ├── BlpImagePlugin.py
│   │           │   ├── BmpImagePlugin.py
│   │           │   ├── BufrStubImagePlugin.py
│   │           │   ├── ContainerIO.py
│   │           │   ├── CurImagePlugin.py
│   │           │   ├── DcxImagePlugin.py
│   │           │   ├── DdsImagePlugin.py
│   │           │   ├── _deprecate.py
│   │           │   ├── EpsImagePlugin.py
│   │           │   ├── ExifTags.py
│   │           │   ├── features.py
│   │           │   ├── FitsImagePlugin.py
│   │           │   ├── FliImagePlugin.py
│   │           │   ├── FontFile.py
│   │           │   ├── FpxImagePlugin.py
│   │           │   ├── FtexImagePlugin.py
│   │           │   ├── GbrImagePlugin.py
│   │           │   ├── GdImageFile.py
│   │           │   ├── GifImagePlugin.py
│   │           │   ├── GimpGradientFile.py
│   │           │   ├── GimpPaletteFile.py
│   │           │   ├── GribStubImagePlugin.py
│   │           │   ├── Hdf5StubImagePlugin.py
│   │           │   ├── IcnsImagePlugin.py
│   │           │   ├── IcoImagePlugin.py
│   │           │   ├── ImageChops.py
│   │           │   ├── ImageCms.py
│   │           │   ├── ImageColor.py
│   │           │   ├── ImageDraw2.py
│   │           │   ├── ImageDraw.py
│   │           │   ├── ImageEnhance.py
│   │           │   ├── ImageFile.py
│   │           │   ├── ImageFilter.py
│   │           │   ├── ImageFont.py
│   │           │   ├── ImageGrab.py
│   │           │   ├── ImageMath.py
│   │           │   ├── ImageMode.py
│   │           │   ├── ImageMorph.py
│   │           │   ├── ImageOps.py
│   │           │   ├── ImagePalette.py
│   │           │   ├── ImagePath.py
│   │           │   ├── Image.py
│   │           │   ├── ImageQt.py
│   │           │   ├── ImageSequence.py
│   │           │   ├── ImageShow.py
│   │           │   ├── ImageStat.py
│   │           │   ├── ImageText.py
│   │           │   ├── ImageTk.py
│   │           │   ├── ImageTransform.py
│   │           │   ├── ImageWin.py
│   │           │   ├── _imagingcms.cpython-313-x86_64-linux-gnu.so
│   │           │   ├── _imagingcms.pyi
│   │           │   ├── _imaging.cpython-313-x86_64-linux-gnu.so
│   │           │   ├── _imagingft.cpython-313-x86_64-linux-gnu.so
│   │           │   ├── _imagingft.pyi
│   │           │   ├── _imagingmath.cpython-313-x86_64-linux-gnu.so
│   │           │   ├── _imagingmath.pyi
│   │           │   ├── _imagingmorph.cpython-313-x86_64-linux-gnu.so
│   │           │   ├── _imagingmorph.pyi
│   │           │   ├── _imaging.pyi
│   │           │   ├── _imagingtk.cpython-313-x86_64-linux-gnu.so
│   │           │   ├── _imagingtk.pyi
│   │           │   ├── ImImagePlugin.py
│   │           │   ├── ImtImagePlugin.py
│   │           │   ├── __init__.py
│   │           │   ├── IptcImagePlugin.py
│   │           │   ├── Jpeg2KImagePlugin.py
│   │           │   ├── JpegImagePlugin.py
│   │           │   ├── JpegPresets.py
│   │           │   ├── __main__.py
│   │           │   ├── McIdasImagePlugin.py
│   │           │   ├── MicImagePlugin.py
│   │           │   ├── MpegImagePlugin.py
│   │           │   ├── MpoImagePlugin.py
│   │           │   ├── MspImagePlugin.py
│   │           │   ├── PaletteFile.py
│   │           │   ├── PalmImagePlugin.py
│   │           │   ├── PcdImagePlugin.py
│   │           │   ├── PcfFontFile.py
│   │           │   ├── PcxImagePlugin.py
│   │           │   ├── PdfImagePlugin.py
│   │           │   ├── PdfParser.py
│   │           │   ├── PixarImagePlugin.py
│   │           │   ├── PngImagePlugin.py
│   │           │   ├── PpmImagePlugin.py
│   │           │   ├── PsdImagePlugin.py
│   │           │   ├── PSDraw.py
│   │           │   ├── __pycache__
│   │           │   │   ├── AvifImagePlugin.cpython-313.pyc
│   │           │   │   ├── BdfFontFile.cpython-313.pyc
│   │           │   │   ├── _binary.cpython-313.pyc
│   │           │   │   ├── BlpImagePlugin.cpython-313.pyc
│   │           │   │   ├── BmpImagePlugin.cpython-313.pyc
│   │           │   │   ├── BufrStubImagePlugin.cpython-313.pyc
│   │           │   │   ├── ContainerIO.cpython-313.pyc
│   │           │   │   ├── CurImagePlugin.cpython-313.pyc
│   │           │   │   ├── DcxImagePlugin.cpython-313.pyc
│   │           │   │   ├── DdsImagePlugin.cpython-313.pyc
│   │           │   │   ├── _deprecate.cpython-313.pyc
│   │           │   │   ├── EpsImagePlugin.cpython-313.pyc
│   │           │   │   ├── ExifTags.cpython-313.pyc
│   │           │   │   ├── features.cpython-313.pyc
│   │           │   │   ├── FitsImagePlugin.cpython-313.pyc
│   │           │   │   ├── FliImagePlugin.cpython-313.pyc
│   │           │   │   ├── FontFile.cpython-313.pyc
│   │           │   │   ├── FpxImagePlugin.cpython-313.pyc
│   │           │   │   ├── FtexImagePlugin.cpython-313.pyc
│   │           │   │   ├── GbrImagePlugin.cpython-313.pyc
│   │           │   │   ├── GdImageFile.cpython-313.pyc
│   │           │   │   ├── GifImagePlugin.cpython-313.pyc
│   │           │   │   ├── GimpGradientFile.cpython-313.pyc
│   │           │   │   ├── GimpPaletteFile.cpython-313.pyc
│   │           │   │   ├── GribStubImagePlugin.cpython-313.pyc
│   │           │   │   ├── Hdf5StubImagePlugin.cpython-313.pyc
│   │           │   │   ├── IcnsImagePlugin.cpython-313.pyc
│   │           │   │   ├── IcoImagePlugin.cpython-313.pyc
│   │           │   │   ├── ImageChops.cpython-313.pyc
│   │           │   │   ├── ImageCms.cpython-313.pyc
│   │           │   │   ├── ImageColor.cpython-313.pyc
│   │           │   │   ├── Image.cpython-313.pyc
│   │           │   │   ├── ImageDraw2.cpython-313.pyc
│   │           │   │   ├── ImageDraw.cpython-313.pyc
│   │           │   │   ├── ImageEnhance.cpython-313.pyc
│   │           │   │   ├── ImageFile.cpython-313.pyc
│   │           │   │   ├── ImageFilter.cpython-313.pyc
│   │           │   │   ├── ImageFont.cpython-313.pyc
│   │           │   │   ├── ImageGrab.cpython-313.pyc
│   │           │   │   ├── ImageMath.cpython-313.pyc
│   │           │   │   ├── ImageMode.cpython-313.pyc
│   │           │   │   ├── ImageMorph.cpython-313.pyc
│   │           │   │   ├── ImageOps.cpython-313.pyc
│   │           │   │   ├── ImagePalette.cpython-313.pyc
│   │           │   │   ├── ImagePath.cpython-313.pyc
│   │           │   │   ├── ImageQt.cpython-313.pyc
│   │           │   │   ├── ImageSequence.cpython-313.pyc
│   │           │   │   ├── ImageShow.cpython-313.pyc
│   │           │   │   ├── ImageStat.cpython-313.pyc
│   │           │   │   ├── ImageText.cpython-313.pyc
│   │           │   │   ├── ImageTk.cpython-313.pyc
│   │           │   │   ├── ImageTransform.cpython-313.pyc
│   │           │   │   ├── ImageWin.cpython-313.pyc
│   │           │   │   ├── ImImagePlugin.cpython-313.pyc
│   │           │   │   ├── ImtImagePlugin.cpython-313.pyc
│   │           │   │   ├── __init__.cpython-313.pyc
│   │           │   │   ├── IptcImagePlugin.cpython-313.pyc
│   │           │   │   ├── Jpeg2KImagePlugin.cpython-313.pyc
│   │           │   │   ├── JpegImagePlugin.cpython-313.pyc
│   │           │   │   ├── JpegPresets.cpython-313.pyc
│   │           │   │   ├── __main__.cpython-313.pyc
│   │           │   │   ├── McIdasImagePlugin.cpython-313.pyc
│   │           │   │   ├── MicImagePlugin.cpython-313.pyc
│   │           │   │   ├── MpegImagePlugin.cpython-313.pyc
│   │           │   │   ├── MpoImagePlugin.cpython-313.pyc
│   │           │   │   ├── MspImagePlugin.cpython-313.pyc
│   │           │   │   ├── PaletteFile.cpython-313.pyc
│   │           │   │   ├── PalmImagePlugin.cpython-313.pyc
│   │           │   │   ├── PcdImagePlugin.cpython-313.pyc
│   │           │   │   ├── PcfFontFile.cpython-313.pyc
│   │           │   │   ├── PcxImagePlugin.cpython-313.pyc
│   │           │   │   ├── PdfImagePlugin.cpython-313.pyc
│   │           │   │   ├── PdfParser.cpython-313.pyc
│   │           │   │   ├── PixarImagePlugin.cpython-313.pyc
│   │           │   │   ├── PngImagePlugin.cpython-313.pyc
│   │           │   │   ├── PpmImagePlugin.cpython-313.pyc
│   │           │   │   ├── PsdImagePlugin.cpython-313.pyc
│   │           │   │   ├── PSDraw.cpython-313.pyc
│   │           │   │   ├── QoiImagePlugin.cpython-313.pyc
│   │           │   │   ├── report.cpython-313.pyc
│   │           │   │   ├── SgiImagePlugin.cpython-313.pyc
│   │           │   │   ├── SpiderImagePlugin.cpython-313.pyc
│   │           │   │   ├── SunImagePlugin.cpython-313.pyc
│   │           │   │   ├── TarIO.cpython-313.pyc
│   │           │   │   ├── TgaImagePlugin.cpython-313.pyc
│   │           │   │   ├── TiffImagePlugin.cpython-313.pyc
│   │           │   │   ├── TiffTags.cpython-313.pyc
│   │           │   │   ├── _tkinter_finder.cpython-313.pyc
│   │           │   │   ├── _typing.cpython-313.pyc
│   │           │   │   ├── _util.cpython-313.pyc
│   │           │   │   ├── _version.cpython-313.pyc
│   │           │   │   ├── WalImageFile.cpython-313.pyc
│   │           │   │   ├── WebPImagePlugin.cpython-313.pyc
│   │           │   │   ├── WmfImagePlugin.cpython-313.pyc
│   │           │   │   ├── XbmImagePlugin.cpython-313.pyc
│   │           │   │   ├── XpmImagePlugin.cpython-313.pyc
│   │           │   │   └── XVThumbImagePlugin.cpython-313.pyc
│   │           │   ├── py.typed
│   │           │   ├── QoiImagePlugin.py
│   │           │   ├── report.py
│   │           │   ├── SgiImagePlugin.py
│   │           │   ├── SpiderImagePlugin.py
│   │           │   ├── SunImagePlugin.py
│   │           │   ├── TarIO.py
│   │           │   ├── TgaImagePlugin.py
│   │           │   ├── TiffImagePlugin.py
│   │           │   ├── TiffTags.py
│   │           │   ├── _tkinter_finder.py
│   │           │   ├── _typing.py
│   │           │   ├── _util.py
│   │           │   ├── _version.py
│   │           │   ├── WalImageFile.py
│   │           │   ├── _webp.cpython-313-x86_64-linux-gnu.so
│   │           │   ├── WebPImagePlugin.py
│   │           │   ├── _webp.pyi
│   │           │   ├── WmfImagePlugin.py
│   │           │   ├── XbmImagePlugin.py
│   │           │   ├── XpmImagePlugin.py
│   │           │   └── XVThumbImagePlugin.py
│   │           ├── pillow-12.1.1.dist-info
│   │           │   ├── INSTALLER
│   │           │   ├── licenses
│   │           │   │   └── LICENSE
│   │           │   ├── METADATA
│   │           │   ├── RECORD
│   │           │   ├── REQUESTED
│   │           │   ├── sboms
│   │           │   │   └── auditwheel.cdx.json
│   │           │   ├── top_level.txt
│   │           │   ├── WHEEL
│   │           │   └── zip-safe
│   │           ├── pillow.libs
│   │           │   ├── libavif-01e67780.so.16.3.0
│   │           │   ├── libbrotlicommon-c55a5f7a.so.1.2.0
│   │           │   ├── libbrotlidec-b57ddf63.so.1.2.0
│   │           │   ├── libfreetype-ee1c40c4.so.6.20.4
│   │           │   ├── libharfbuzz-0692f733.so.0.61230.0
│   │           │   ├── libjpeg-32d42e18.so.62.4.0
│   │           │   ├── liblcms2-cc10e42f.so.2.0.17
│   │           │   ├── liblzma-61b1002e.so.5.8.2
│   │           │   ├── libopenjp2-94e588ba.so.2.5.4
│   │           │   ├── libpng16-4a38ea05.so.16.53.0
│   │           │   ├── libsharpyuv-95d8a097.so.0.1.2
│   │           │   ├── libtiff-295fd75c.so.6.2.0
│   │           │   ├── libwebp-d8b9687f.so.7.2.0
│   │           │   ├── libwebpdemux-747f2b49.so.2.0.17
│   │           │   ├── libwebpmux-7f11e5ce.so.3.1.2
│   │           │   ├── libXau-154567c4.so.6.0.0
│   │           │   ├── libxcb-64009ff3.so.1.1.0
│   │           │   └── libzstd-761a17b6.so.1.5.7
│   │           ├── pip
│   │           │   ├── __init__.py
│   │           │   ├── _internal
│   │           │   │   ├── build_env.py
│   │           │   │   ├── cache.py
│   │           │   │   ├── cli
│   │           │   │   │   ├── autocompletion.py
│   │           │   │   │   ├── base_command.py
│   │           │   │   │   ├── cmdoptions.py
│   │           │   │   │   ├── command_context.py
│   │           │   │   │   ├── index_command.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── main_parser.py
│   │           │   │   │   ├── main.py
│   │           │   │   │   ├── parser.py
│   │           │   │   │   ├── progress_bars.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── autocompletion.cpython-313.pyc
│   │           │   │   │   │   ├── base_command.cpython-313.pyc
│   │           │   │   │   │   ├── cmdoptions.cpython-313.pyc
│   │           │   │   │   │   ├── command_context.cpython-313.pyc
│   │           │   │   │   │   ├── index_command.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── main.cpython-313.pyc
│   │           │   │   │   │   ├── main_parser.cpython-313.pyc
│   │           │   │   │   │   ├── parser.cpython-313.pyc
│   │           │   │   │   │   ├── progress_bars.cpython-313.pyc
│   │           │   │   │   │   ├── req_command.cpython-313.pyc
│   │           │   │   │   │   ├── spinners.cpython-313.pyc
│   │           │   │   │   │   └── status_codes.cpython-313.pyc
│   │           │   │   │   ├── req_command.py
│   │           │   │   │   ├── spinners.py
│   │           │   │   │   └── status_codes.py
│   │           │   │   ├── commands
│   │           │   │   │   ├── cache.py
│   │           │   │   │   ├── check.py
│   │           │   │   │   ├── completion.py
│   │           │   │   │   ├── configuration.py
│   │           │   │   │   ├── debug.py
│   │           │   │   │   ├── download.py
│   │           │   │   │   ├── freeze.py
│   │           │   │   │   ├── hash.py
│   │           │   │   │   ├── help.py
│   │           │   │   │   ├── index.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── inspect.py
│   │           │   │   │   ├── install.py
│   │           │   │   │   ├── list.py
│   │           │   │   │   ├── lock.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── cache.cpython-313.pyc
│   │           │   │   │   │   ├── check.cpython-313.pyc
│   │           │   │   │   │   ├── completion.cpython-313.pyc
│   │           │   │   │   │   ├── configuration.cpython-313.pyc
│   │           │   │   │   │   ├── debug.cpython-313.pyc
│   │           │   │   │   │   ├── download.cpython-313.pyc
│   │           │   │   │   │   ├── freeze.cpython-313.pyc
│   │           │   │   │   │   ├── hash.cpython-313.pyc
│   │           │   │   │   │   ├── help.cpython-313.pyc
│   │           │   │   │   │   ├── index.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── inspect.cpython-313.pyc
│   │           │   │   │   │   ├── install.cpython-313.pyc
│   │           │   │   │   │   ├── list.cpython-313.pyc
│   │           │   │   │   │   ├── lock.cpython-313.pyc
│   │           │   │   │   │   ├── search.cpython-313.pyc
│   │           │   │   │   │   ├── show.cpython-313.pyc
│   │           │   │   │   │   ├── uninstall.cpython-313.pyc
│   │           │   │   │   │   └── wheel.cpython-313.pyc
│   │           │   │   │   ├── search.py
│   │           │   │   │   ├── show.py
│   │           │   │   │   ├── uninstall.py
│   │           │   │   │   └── wheel.py
│   │           │   │   ├── configuration.py
│   │           │   │   ├── distributions
│   │           │   │   │   ├── base.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── installed.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── base.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── installed.cpython-313.pyc
│   │           │   │   │   │   ├── sdist.cpython-313.pyc
│   │           │   │   │   │   └── wheel.cpython-313.pyc
│   │           │   │   │   ├── sdist.py
│   │           │   │   │   └── wheel.py
│   │           │   │   ├── exceptions.py
│   │           │   │   ├── index
│   │           │   │   │   ├── collector.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── package_finder.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── collector.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── package_finder.cpython-313.pyc
│   │           │   │   │   │   └── sources.cpython-313.pyc
│   │           │   │   │   └── sources.py
│   │           │   │   ├── __init__.py
│   │           │   │   ├── locations
│   │           │   │   │   ├── base.py
│   │           │   │   │   ├── _distutils.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── base.cpython-313.pyc
│   │           │   │   │   │   ├── _distutils.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   └── _sysconfig.cpython-313.pyc
│   │           │   │   │   └── _sysconfig.py
│   │           │   │   ├── main.py
│   │           │   │   ├── metadata
│   │           │   │   │   ├── base.py
│   │           │   │   │   ├── importlib
│   │           │   │   │   │   ├── _compat.py
│   │           │   │   │   │   ├── _dists.py
│   │           │   │   │   │   ├── _envs.py
│   │           │   │   │   │   ├── __init__.py
│   │           │   │   │   │   └── __pycache__
│   │           │   │   │   │       ├── _compat.cpython-313.pyc
│   │           │   │   │   │       ├── _dists.cpython-313.pyc
│   │           │   │   │   │       ├── _envs.cpython-313.pyc
│   │           │   │   │   │       └── __init__.cpython-313.pyc
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── _json.py
│   │           │   │   │   ├── pkg_resources.py
│   │           │   │   │   └── __pycache__
│   │           │   │   │       ├── base.cpython-313.pyc
│   │           │   │   │       ├── __init__.cpython-313.pyc
│   │           │   │   │       ├── _json.cpython-313.pyc
│   │           │   │   │       └── pkg_resources.cpython-313.pyc
│   │           │   │   ├── models
│   │           │   │   │   ├── candidate.py
│   │           │   │   │   ├── direct_url.py
│   │           │   │   │   ├── format_control.py
│   │           │   │   │   ├── index.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── installation_report.py
│   │           │   │   │   ├── link.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── candidate.cpython-313.pyc
│   │           │   │   │   │   ├── direct_url.cpython-313.pyc
│   │           │   │   │   │   ├── format_control.cpython-313.pyc
│   │           │   │   │   │   ├── index.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── installation_report.cpython-313.pyc
│   │           │   │   │   │   ├── link.cpython-313.pyc
│   │           │   │   │   │   ├── pylock.cpython-313.pyc
│   │           │   │   │   │   ├── scheme.cpython-313.pyc
│   │           │   │   │   │   ├── search_scope.cpython-313.pyc
│   │           │   │   │   │   ├── selection_prefs.cpython-313.pyc
│   │           │   │   │   │   ├── target_python.cpython-313.pyc
│   │           │   │   │   │   └── wheel.cpython-313.pyc
│   │           │   │   │   ├── pylock.py
│   │           │   │   │   ├── scheme.py
│   │           │   │   │   ├── search_scope.py
│   │           │   │   │   ├── selection_prefs.py
│   │           │   │   │   ├── target_python.py
│   │           │   │   │   └── wheel.py
│   │           │   │   ├── network
│   │           │   │   │   ├── auth.py
│   │           │   │   │   ├── cache.py
│   │           │   │   │   ├── download.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── lazy_wheel.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── auth.cpython-313.pyc
│   │           │   │   │   │   ├── cache.cpython-313.pyc
│   │           │   │   │   │   ├── download.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── lazy_wheel.cpython-313.pyc
│   │           │   │   │   │   ├── session.cpython-313.pyc
│   │           │   │   │   │   ├── utils.cpython-313.pyc
│   │           │   │   │   │   └── xmlrpc.cpython-313.pyc
│   │           │   │   │   ├── session.py
│   │           │   │   │   ├── utils.py
│   │           │   │   │   └── xmlrpc.py
│   │           │   │   ├── operations
│   │           │   │   │   ├── build
│   │           │   │   │   │   ├── build_tracker.py
│   │           │   │   │   │   ├── __init__.py
│   │           │   │   │   │   ├── metadata_editable.py
│   │           │   │   │   │   ├── metadata_legacy.py
│   │           │   │   │   │   ├── metadata.py
│   │           │   │   │   │   ├── __pycache__
│   │           │   │   │   │   │   ├── build_tracker.cpython-313.pyc
│   │           │   │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   │   ├── metadata.cpython-313.pyc
│   │           │   │   │   │   │   ├── metadata_editable.cpython-313.pyc
│   │           │   │   │   │   │   ├── metadata_legacy.cpython-313.pyc
│   │           │   │   │   │   │   ├── wheel.cpython-313.pyc
│   │           │   │   │   │   │   ├── wheel_editable.cpython-313.pyc
│   │           │   │   │   │   │   └── wheel_legacy.cpython-313.pyc
│   │           │   │   │   │   ├── wheel_editable.py
│   │           │   │   │   │   ├── wheel_legacy.py
│   │           │   │   │   │   └── wheel.py
│   │           │   │   │   ├── check.py
│   │           │   │   │   ├── freeze.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── install
│   │           │   │   │   │   ├── editable_legacy.py
│   │           │   │   │   │   ├── __init__.py
│   │           │   │   │   │   ├── __pycache__
│   │           │   │   │   │   │   ├── editable_legacy.cpython-313.pyc
│   │           │   │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   │   └── wheel.cpython-313.pyc
│   │           │   │   │   │   └── wheel.py
│   │           │   │   │   ├── prepare.py
│   │           │   │   │   └── __pycache__
│   │           │   │   │       ├── check.cpython-313.pyc
│   │           │   │   │       ├── freeze.cpython-313.pyc
│   │           │   │   │       ├── __init__.cpython-313.pyc
│   │           │   │   │       └── prepare.cpython-313.pyc
│   │           │   │   ├── __pycache__
│   │           │   │   │   ├── build_env.cpython-313.pyc
│   │           │   │   │   ├── cache.cpython-313.pyc
│   │           │   │   │   ├── configuration.cpython-313.pyc
│   │           │   │   │   ├── exceptions.cpython-313.pyc
│   │           │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   ├── main.cpython-313.pyc
│   │           │   │   │   ├── pyproject.cpython-313.pyc
│   │           │   │   │   ├── self_outdated_check.cpython-313.pyc
│   │           │   │   │   └── wheel_builder.cpython-313.pyc
│   │           │   │   ├── pyproject.py
│   │           │   │   ├── req
│   │           │   │   │   ├── constructors.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── constructors.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── req_dependency_group.cpython-313.pyc
│   │           │   │   │   │   ├── req_file.cpython-313.pyc
│   │           │   │   │   │   ├── req_install.cpython-313.pyc
│   │           │   │   │   │   ├── req_set.cpython-313.pyc
│   │           │   │   │   │   └── req_uninstall.cpython-313.pyc
│   │           │   │   │   ├── req_dependency_group.py
│   │           │   │   │   ├── req_file.py
│   │           │   │   │   ├── req_install.py
│   │           │   │   │   ├── req_set.py
│   │           │   │   │   └── req_uninstall.py
│   │           │   │   ├── resolution
│   │           │   │   │   ├── base.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── legacy
│   │           │   │   │   │   ├── __init__.py
│   │           │   │   │   │   ├── __pycache__
│   │           │   │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   │   └── resolver.cpython-313.pyc
│   │           │   │   │   │   └── resolver.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── base.cpython-313.pyc
│   │           │   │   │   │   └── __init__.cpython-313.pyc
│   │           │   │   │   └── resolvelib
│   │           │   │   │       ├── base.py
│   │           │   │   │       ├── candidates.py
│   │           │   │   │       ├── factory.py
│   │           │   │   │       ├── found_candidates.py
│   │           │   │   │       ├── __init__.py
│   │           │   │   │       ├── provider.py
│   │           │   │   │       ├── __pycache__
│   │           │   │   │       │   ├── base.cpython-313.pyc
│   │           │   │   │       │   ├── candidates.cpython-313.pyc
│   │           │   │   │       │   ├── factory.cpython-313.pyc
│   │           │   │   │       │   ├── found_candidates.cpython-313.pyc
│   │           │   │   │       │   ├── __init__.cpython-313.pyc
│   │           │   │   │       │   ├── provider.cpython-313.pyc
│   │           │   │   │       │   ├── reporter.cpython-313.pyc
│   │           │   │   │       │   ├── requirements.cpython-313.pyc
│   │           │   │   │       │   └── resolver.cpython-313.pyc
│   │           │   │   │       ├── reporter.py
│   │           │   │   │       ├── requirements.py
│   │           │   │   │       └── resolver.py
│   │           │   │   ├── self_outdated_check.py
│   │           │   │   ├── utils
│   │           │   │   │   ├── appdirs.py
│   │           │   │   │   ├── compatibility_tags.py
│   │           │   │   │   ├── compat.py
│   │           │   │   │   ├── datetime.py
│   │           │   │   │   ├── deprecation.py
│   │           │   │   │   ├── direct_url_helpers.py
│   │           │   │   │   ├── egg_link.py
│   │           │   │   │   ├── entrypoints.py
│   │           │   │   │   ├── filesystem.py
│   │           │   │   │   ├── filetypes.py
│   │           │   │   │   ├── glibc.py
│   │           │   │   │   ├── hashes.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── _jaraco_text.py
│   │           │   │   │   ├── logging.py
│   │           │   │   │   ├── _log.py
│   │           │   │   │   ├── misc.py
│   │           │   │   │   ├── packaging.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── appdirs.cpython-313.pyc
│   │           │   │   │   │   ├── compat.cpython-313.pyc
│   │           │   │   │   │   ├── compatibility_tags.cpython-313.pyc
│   │           │   │   │   │   ├── datetime.cpython-313.pyc
│   │           │   │   │   │   ├── deprecation.cpython-313.pyc
│   │           │   │   │   │   ├── direct_url_helpers.cpython-313.pyc
│   │           │   │   │   │   ├── egg_link.cpython-313.pyc
│   │           │   │   │   │   ├── entrypoints.cpython-313.pyc
│   │           │   │   │   │   ├── filesystem.cpython-313.pyc
│   │           │   │   │   │   ├── filetypes.cpython-313.pyc
│   │           │   │   │   │   ├── glibc.cpython-313.pyc
│   │           │   │   │   │   ├── hashes.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── _jaraco_text.cpython-313.pyc
│   │           │   │   │   │   ├── _log.cpython-313.pyc
│   │           │   │   │   │   ├── logging.cpython-313.pyc
│   │           │   │   │   │   ├── misc.cpython-313.pyc
│   │           │   │   │   │   ├── packaging.cpython-313.pyc
│   │           │   │   │   │   ├── retry.cpython-313.pyc
│   │           │   │   │   │   ├── setuptools_build.cpython-313.pyc
│   │           │   │   │   │   ├── subprocess.cpython-313.pyc
│   │           │   │   │   │   ├── temp_dir.cpython-313.pyc
│   │           │   │   │   │   ├── unpacking.cpython-313.pyc
│   │           │   │   │   │   ├── urls.cpython-313.pyc
│   │           │   │   │   │   ├── virtualenv.cpython-313.pyc
│   │           │   │   │   │   └── wheel.cpython-313.pyc
│   │           │   │   │   ├── retry.py
│   │           │   │   │   ├── setuptools_build.py
│   │           │   │   │   ├── subprocess.py
│   │           │   │   │   ├── temp_dir.py
│   │           │   │   │   ├── unpacking.py
│   │           │   │   │   ├── urls.py
│   │           │   │   │   ├── virtualenv.py
│   │           │   │   │   └── wheel.py
│   │           │   │   ├── vcs
│   │           │   │   │   ├── bazaar.py
│   │           │   │   │   ├── git.py
│   │           │   │   │   ├── __init__.py
│   │           │   │   │   ├── mercurial.py
│   │           │   │   │   ├── __pycache__
│   │           │   │   │   │   ├── bazaar.cpython-313.pyc
│   │           │   │   │   │   ├── git.cpython-313.pyc
│   │           │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │   │   │   │   ├── mercurial.cpython-313.pyc
│   │           │   │   │   │   ├── subversion.cpython-313.pyc
│   │           │   │   │   │   └── versioncontrol.cpython-313.pyc
│   │           │   │   │   ├── subversion.py
│   │           │   │   │   └── versioncontrol.py
│   │           │   │   └── wheel_builder.py
│   │           │   ├── __main__.py
│   │           │   ├── __pip-runner__.py
│   │           │   ├── __pycache__
│   │           │   │   ├── __init__.cpython-313.pyc
│   │           │   │   ├── __main__.cpython-313.pyc
│   │           │   │   └── __pip-runner__.cpython-313.pyc
│   │           │   ├── py.typed
│   │           │   └── _vendor
│   │           │       ├── cachecontrol
│   │           │       │   ├── adapter.py
│   │           │       │   ├── cache.py
│   │           │       │   ├── caches
│   │           │       │   │   ├── file_cache.py
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── __pycache__
│   │           │       │   │   │   ├── file_cache.cpython-313.pyc
│   │           │       │   │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   │   └── redis_cache.cpython-313.pyc
│   │           │       │   │   └── redis_cache.py
│   │           │       │   ├── _cmd.py
│   │           │       │   ├── controller.py
│   │           │       │   ├── filewrapper.py
│   │           │       │   ├── heuristics.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── adapter.cpython-313.pyc
│   │           │       │   │   ├── cache.cpython-313.pyc
│   │           │       │   │   ├── _cmd.cpython-313.pyc
│   │           │       │   │   ├── controller.cpython-313.pyc
│   │           │       │   │   ├── filewrapper.cpython-313.pyc
│   │           │       │   │   ├── heuristics.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── serialize.cpython-313.pyc
│   │           │       │   │   └── wrapper.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   ├── serialize.py
│   │           │       │   └── wrapper.py
│   │           │       ├── certifi
│   │           │       │   ├── cacert.pem
│   │           │       │   ├── core.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── __main__.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── core.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   └── __main__.cpython-313.pyc
│   │           │       │   └── py.typed
│   │           │       ├── dependency_groups
│   │           │       │   ├── _implementation.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── _lint_dependency_groups.py
│   │           │       │   ├── __main__.py
│   │           │       │   ├── _pip_wrapper.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── _implementation.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── _lint_dependency_groups.cpython-313.pyc
│   │           │       │   │   ├── __main__.cpython-313.pyc
│   │           │       │   │   ├── _pip_wrapper.cpython-313.pyc
│   │           │       │   │   └── _toml_compat.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   └── _toml_compat.py
│   │           │       ├── distlib
│   │           │       │   ├── compat.py
│   │           │       │   ├── database.py
│   │           │       │   ├── index.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── locators.py
│   │           │       │   ├── manifest.py
│   │           │       │   ├── markers.py
│   │           │       │   ├── metadata.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── compat.cpython-313.pyc
│   │           │       │   │   ├── database.cpython-313.pyc
│   │           │       │   │   ├── index.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── locators.cpython-313.pyc
│   │           │       │   │   ├── manifest.cpython-313.pyc
│   │           │       │   │   ├── markers.cpython-313.pyc
│   │           │       │   │   ├── metadata.cpython-313.pyc
│   │           │       │   │   ├── resources.cpython-313.pyc
│   │           │       │   │   ├── scripts.cpython-313.pyc
│   │           │       │   │   ├── util.cpython-313.pyc
│   │           │       │   │   ├── version.cpython-313.pyc
│   │           │       │   │   └── wheel.cpython-313.pyc
│   │           │       │   ├── resources.py
│   │           │       │   ├── scripts.py
│   │           │       │   ├── t32.exe
│   │           │       │   ├── t64-arm.exe
│   │           │       │   ├── t64.exe
│   │           │       │   ├── util.py
│   │           │       │   ├── version.py
│   │           │       │   ├── w32.exe
│   │           │       │   ├── w64-arm.exe
│   │           │       │   ├── w64.exe
│   │           │       │   └── wheel.py
│   │           │       ├── distro
│   │           │       │   ├── distro.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── __main__.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── distro.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   └── __main__.cpython-313.pyc
│   │           │       │   └── py.typed
│   │           │       ├── idna
│   │           │       │   ├── codec.py
│   │           │       │   ├── compat.py
│   │           │       │   ├── core.py
│   │           │       │   ├── idnadata.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── intranges.py
│   │           │       │   ├── package_data.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── codec.cpython-313.pyc
│   │           │       │   │   ├── compat.cpython-313.pyc
│   │           │       │   │   ├── core.cpython-313.pyc
│   │           │       │   │   ├── idnadata.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── intranges.cpython-313.pyc
│   │           │       │   │   ├── package_data.cpython-313.pyc
│   │           │       │   │   └── uts46data.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   └── uts46data.py
│   │           │       ├── __init__.py
│   │           │       ├── msgpack
│   │           │       │   ├── exceptions.py
│   │           │       │   ├── ext.py
│   │           │       │   ├── fallback.py
│   │           │       │   ├── __init__.py
│   │           │       │   └── __pycache__
│   │           │       │       ├── exceptions.cpython-313.pyc
│   │           │       │       ├── ext.cpython-313.pyc
│   │           │       │       ├── fallback.cpython-313.pyc
│   │           │       │       └── __init__.cpython-313.pyc
│   │           │       ├── packaging
│   │           │       │   ├── _elffile.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── licenses
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── __pycache__
│   │           │       │   │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   │   └── _spdx.cpython-313.pyc
│   │           │       │   │   └── _spdx.py
│   │           │       │   ├── _manylinux.py
│   │           │       │   ├── markers.py
│   │           │       │   ├── metadata.py
│   │           │       │   ├── _musllinux.py
│   │           │       │   ├── _parser.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── _elffile.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── _manylinux.cpython-313.pyc
│   │           │       │   │   ├── markers.cpython-313.pyc
│   │           │       │   │   ├── metadata.cpython-313.pyc
│   │           │       │   │   ├── _musllinux.cpython-313.pyc
│   │           │       │   │   ├── _parser.cpython-313.pyc
│   │           │       │   │   ├── requirements.cpython-313.pyc
│   │           │       │   │   ├── specifiers.cpython-313.pyc
│   │           │       │   │   ├── _structures.cpython-313.pyc
│   │           │       │   │   ├── tags.cpython-313.pyc
│   │           │       │   │   ├── _tokenizer.cpython-313.pyc
│   │           │       │   │   ├── utils.cpython-313.pyc
│   │           │       │   │   └── version.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   ├── requirements.py
│   │           │       │   ├── specifiers.py
│   │           │       │   ├── _structures.py
│   │           │       │   ├── tags.py
│   │           │       │   ├── _tokenizer.py
│   │           │       │   ├── utils.py
│   │           │       │   └── version.py
│   │           │       ├── pkg_resources
│   │           │       │   ├── __init__.py
│   │           │       │   └── __pycache__
│   │           │       │       └── __init__.cpython-313.pyc
│   │           │       ├── platformdirs
│   │           │       │   ├── android.py
│   │           │       │   ├── api.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── macos.py
│   │           │       │   ├── __main__.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── android.cpython-313.pyc
│   │           │       │   │   ├── api.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── macos.cpython-313.pyc
│   │           │       │   │   ├── __main__.cpython-313.pyc
│   │           │       │   │   ├── unix.cpython-313.pyc
│   │           │       │   │   ├── version.cpython-313.pyc
│   │           │       │   │   └── windows.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   ├── unix.py
│   │           │       │   ├── version.py
│   │           │       │   └── windows.py
│   │           │       ├── __pycache__
│   │           │       │   ├── __init__.cpython-313.pyc
│   │           │       │   └── typing_extensions.cpython-313.pyc
│   │           │       ├── pygments
│   │           │       │   ├── console.py
│   │           │       │   ├── filter.py
│   │           │       │   ├── filters
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   └── __pycache__
│   │           │       │   │       └── __init__.cpython-313.pyc
│   │           │       │   ├── formatter.py
│   │           │       │   ├── formatters
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── _mapping.py
│   │           │       │   │   └── __pycache__
│   │           │       │   │       ├── __init__.cpython-313.pyc
│   │           │       │   │       └── _mapping.cpython-313.pyc
│   │           │       │   ├── __init__.py
│   │           │       │   ├── lexer.py
│   │           │       │   ├── lexers
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── _mapping.py
│   │           │       │   │   ├── __pycache__
│   │           │       │   │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   │   ├── _mapping.cpython-313.pyc
│   │           │       │   │   │   └── python.cpython-313.pyc
│   │           │       │   │   └── python.py
│   │           │       │   ├── __main__.py
│   │           │       │   ├── modeline.py
│   │           │       │   ├── plugin.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── console.cpython-313.pyc
│   │           │       │   │   ├── filter.cpython-313.pyc
│   │           │       │   │   ├── formatter.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── lexer.cpython-313.pyc
│   │           │       │   │   ├── __main__.cpython-313.pyc
│   │           │       │   │   ├── modeline.cpython-313.pyc
│   │           │       │   │   ├── plugin.cpython-313.pyc
│   │           │       │   │   ├── regexopt.cpython-313.pyc
│   │           │       │   │   ├── scanner.cpython-313.pyc
│   │           │       │   │   ├── sphinxext.cpython-313.pyc
│   │           │       │   │   ├── style.cpython-313.pyc
│   │           │       │   │   ├── token.cpython-313.pyc
│   │           │       │   │   ├── unistring.cpython-313.pyc
│   │           │       │   │   └── util.cpython-313.pyc
│   │           │       │   ├── regexopt.py
│   │           │       │   ├── scanner.py
│   │           │       │   ├── sphinxext.py
│   │           │       │   ├── style.py
│   │           │       │   ├── styles
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── _mapping.py
│   │           │       │   │   └── __pycache__
│   │           │       │   │       ├── __init__.cpython-313.pyc
│   │           │       │   │       └── _mapping.cpython-313.pyc
│   │           │       │   ├── token.py
│   │           │       │   ├── unistring.py
│   │           │       │   └── util.py
│   │           │       ├── pyproject_hooks
│   │           │       │   ├── _impl.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── _in_process
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── _in_process.py
│   │           │       │   │   └── __pycache__
│   │           │       │   │       ├── __init__.cpython-313.pyc
│   │           │       │   │       └── _in_process.cpython-313.pyc
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── _impl.cpython-313.pyc
│   │           │       │   │   └── __init__.cpython-313.pyc
│   │           │       │   └── py.typed
│   │           │       ├── requests
│   │           │       │   ├── adapters.py
│   │           │       │   ├── api.py
│   │           │       │   ├── auth.py
│   │           │       │   ├── certs.py
│   │           │       │   ├── compat.py
│   │           │       │   ├── cookies.py
│   │           │       │   ├── exceptions.py
│   │           │       │   ├── help.py
│   │           │       │   ├── hooks.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── _internal_utils.py
│   │           │       │   ├── models.py
│   │           │       │   ├── packages.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── adapters.cpython-313.pyc
│   │           │       │   │   ├── api.cpython-313.pyc
│   │           │       │   │   ├── auth.cpython-313.pyc
│   │           │       │   │   ├── certs.cpython-313.pyc
│   │           │       │   │   ├── compat.cpython-313.pyc
│   │           │       │   │   ├── cookies.cpython-313.pyc
│   │           │       │   │   ├── exceptions.cpython-313.pyc
│   │           │       │   │   ├── help.cpython-313.pyc
│   │           │       │   │   ├── hooks.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── _internal_utils.cpython-313.pyc
│   │           │       │   │   ├── models.cpython-313.pyc
│   │           │       │   │   ├── packages.cpython-313.pyc
│   │           │       │   │   ├── sessions.cpython-313.pyc
│   │           │       │   │   ├── status_codes.cpython-313.pyc
│   │           │       │   │   ├── structures.cpython-313.pyc
│   │           │       │   │   ├── utils.cpython-313.pyc
│   │           │       │   │   └── __version__.cpython-313.pyc
│   │           │       │   ├── sessions.py
│   │           │       │   ├── status_codes.py
│   │           │       │   ├── structures.py
│   │           │       │   ├── utils.py
│   │           │       │   └── __version__.py
│   │           │       ├── resolvelib
│   │           │       │   ├── __init__.py
│   │           │       │   ├── providers.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── providers.cpython-313.pyc
│   │           │       │   │   ├── reporters.cpython-313.pyc
│   │           │       │   │   └── structs.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   ├── reporters.py
│   │           │       │   ├── resolvers
│   │           │       │   │   ├── abstract.py
│   │           │       │   │   ├── criterion.py
│   │           │       │   │   ├── exceptions.py
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── __pycache__
│   │           │       │   │   │   ├── abstract.cpython-313.pyc
│   │           │       │   │   │   ├── criterion.cpython-313.pyc
│   │           │       │   │   │   ├── exceptions.cpython-313.pyc
│   │           │       │   │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   │   └── resolution.cpython-313.pyc
│   │           │       │   │   └── resolution.py
│   │           │       │   └── structs.py
│   │           │       ├── rich
│   │           │       │   ├── abc.py
│   │           │       │   ├── align.py
│   │           │       │   ├── ansi.py
│   │           │       │   ├── bar.py
│   │           │       │   ├── box.py
│   │           │       │   ├── cells.py
│   │           │       │   ├── _cell_widths.py
│   │           │       │   ├── color.py
│   │           │       │   ├── color_triplet.py
│   │           │       │   ├── columns.py
│   │           │       │   ├── console.py
│   │           │       │   ├── constrain.py
│   │           │       │   ├── containers.py
│   │           │       │   ├── control.py
│   │           │       │   ├── default_styles.py
│   │           │       │   ├── diagnose.py
│   │           │       │   ├── _emoji_codes.py
│   │           │       │   ├── emoji.py
│   │           │       │   ├── _emoji_replace.py
│   │           │       │   ├── errors.py
│   │           │       │   ├── _export_format.py
│   │           │       │   ├── _extension.py
│   │           │       │   ├── _fileno.py
│   │           │       │   ├── file_proxy.py
│   │           │       │   ├── filesize.py
│   │           │       │   ├── highlighter.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── _inspect.py
│   │           │       │   ├── json.py
│   │           │       │   ├── jupyter.py
│   │           │       │   ├── layout.py
│   │           │       │   ├── live.py
│   │           │       │   ├── live_render.py
│   │           │       │   ├── logging.py
│   │           │       │   ├── _log_render.py
│   │           │       │   ├── _loop.py
│   │           │       │   ├── __main__.py
│   │           │       │   ├── markup.py
│   │           │       │   ├── measure.py
│   │           │       │   ├── _null_file.py
│   │           │       │   ├── padding.py
│   │           │       │   ├── pager.py
│   │           │       │   ├── palette.py
│   │           │       │   ├── _palettes.py
│   │           │       │   ├── panel.py
│   │           │       │   ├── _pick.py
│   │           │       │   ├── pretty.py
│   │           │       │   ├── progress_bar.py
│   │           │       │   ├── progress.py
│   │           │       │   ├── prompt.py
│   │           │       │   ├── protocol.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── abc.cpython-313.pyc
│   │           │       │   │   ├── align.cpython-313.pyc
│   │           │       │   │   ├── ansi.cpython-313.pyc
│   │           │       │   │   ├── bar.cpython-313.pyc
│   │           │       │   │   ├── box.cpython-313.pyc
│   │           │       │   │   ├── cells.cpython-313.pyc
│   │           │       │   │   ├── _cell_widths.cpython-313.pyc
│   │           │       │   │   ├── color.cpython-313.pyc
│   │           │       │   │   ├── color_triplet.cpython-313.pyc
│   │           │       │   │   ├── columns.cpython-313.pyc
│   │           │       │   │   ├── console.cpython-313.pyc
│   │           │       │   │   ├── constrain.cpython-313.pyc
│   │           │       │   │   ├── containers.cpython-313.pyc
│   │           │       │   │   ├── control.cpython-313.pyc
│   │           │       │   │   ├── default_styles.cpython-313.pyc
│   │           │       │   │   ├── diagnose.cpython-313.pyc
│   │           │       │   │   ├── _emoji_codes.cpython-313.pyc
│   │           │       │   │   ├── emoji.cpython-313.pyc
│   │           │       │   │   ├── _emoji_replace.cpython-313.pyc
│   │           │       │   │   ├── errors.cpython-313.pyc
│   │           │       │   │   ├── _export_format.cpython-313.pyc
│   │           │       │   │   ├── _extension.cpython-313.pyc
│   │           │       │   │   ├── _fileno.cpython-313.pyc
│   │           │       │   │   ├── file_proxy.cpython-313.pyc
│   │           │       │   │   ├── filesize.cpython-313.pyc
│   │           │       │   │   ├── highlighter.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── _inspect.cpython-313.pyc
│   │           │       │   │   ├── json.cpython-313.pyc
│   │           │       │   │   ├── jupyter.cpython-313.pyc
│   │           │       │   │   ├── layout.cpython-313.pyc
│   │           │       │   │   ├── live.cpython-313.pyc
│   │           │       │   │   ├── live_render.cpython-313.pyc
│   │           │       │   │   ├── logging.cpython-313.pyc
│   │           │       │   │   ├── _log_render.cpython-313.pyc
│   │           │       │   │   ├── _loop.cpython-313.pyc
│   │           │       │   │   ├── __main__.cpython-313.pyc
│   │           │       │   │   ├── markup.cpython-313.pyc
│   │           │       │   │   ├── measure.cpython-313.pyc
│   │           │       │   │   ├── _null_file.cpython-313.pyc
│   │           │       │   │   ├── padding.cpython-313.pyc
│   │           │       │   │   ├── pager.cpython-313.pyc
│   │           │       │   │   ├── palette.cpython-313.pyc
│   │           │       │   │   ├── _palettes.cpython-313.pyc
│   │           │       │   │   ├── panel.cpython-313.pyc
│   │           │       │   │   ├── _pick.cpython-313.pyc
│   │           │       │   │   ├── pretty.cpython-313.pyc
│   │           │       │   │   ├── progress_bar.cpython-313.pyc
│   │           │       │   │   ├── progress.cpython-313.pyc
│   │           │       │   │   ├── prompt.cpython-313.pyc
│   │           │       │   │   ├── protocol.cpython-313.pyc
│   │           │       │   │   ├── _ratio.cpython-313.pyc
│   │           │       │   │   ├── region.cpython-313.pyc
│   │           │       │   │   ├── repr.cpython-313.pyc
│   │           │       │   │   ├── rule.cpython-313.pyc
│   │           │       │   │   ├── scope.cpython-313.pyc
│   │           │       │   │   ├── screen.cpython-313.pyc
│   │           │       │   │   ├── segment.cpython-313.pyc
│   │           │       │   │   ├── spinner.cpython-313.pyc
│   │           │       │   │   ├── _spinners.cpython-313.pyc
│   │           │       │   │   ├── _stack.cpython-313.pyc
│   │           │       │   │   ├── status.cpython-313.pyc
│   │           │       │   │   ├── style.cpython-313.pyc
│   │           │       │   │   ├── styled.cpython-313.pyc
│   │           │       │   │   ├── syntax.cpython-313.pyc
│   │           │       │   │   ├── table.cpython-313.pyc
│   │           │       │   │   ├── terminal_theme.cpython-313.pyc
│   │           │       │   │   ├── text.cpython-313.pyc
│   │           │       │   │   ├── theme.cpython-313.pyc
│   │           │       │   │   ├── themes.cpython-313.pyc
│   │           │       │   │   ├── _timer.cpython-313.pyc
│   │           │       │   │   ├── traceback.cpython-313.pyc
│   │           │       │   │   ├── tree.cpython-313.pyc
│   │           │       │   │   ├── _win32_console.cpython-313.pyc
│   │           │       │   │   ├── _windows.cpython-313.pyc
│   │           │       │   │   ├── _windows_renderer.cpython-313.pyc
│   │           │       │   │   └── _wrap.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   ├── _ratio.py
│   │           │       │   ├── region.py
│   │           │       │   ├── repr.py
│   │           │       │   ├── rule.py
│   │           │       │   ├── scope.py
│   │           │       │   ├── screen.py
│   │           │       │   ├── segment.py
│   │           │       │   ├── spinner.py
│   │           │       │   ├── _spinners.py
│   │           │       │   ├── _stack.py
│   │           │       │   ├── status.py
│   │           │       │   ├── styled.py
│   │           │       │   ├── style.py
│   │           │       │   ├── syntax.py
│   │           │       │   ├── table.py
│   │           │       │   ├── terminal_theme.py
│   │           │       │   ├── text.py
│   │           │       │   ├── theme.py
│   │           │       │   ├── themes.py
│   │           │       │   ├── _timer.py
│   │           │       │   ├── traceback.py
│   │           │       │   ├── tree.py
│   │           │       │   ├── _win32_console.py
│   │           │       │   ├── _windows.py
│   │           │       │   ├── _windows_renderer.py
│   │           │       │   └── _wrap.py
│   │           │       ├── tomli
│   │           │       │   ├── __init__.py
│   │           │       │   ├── _parser.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── _parser.cpython-313.pyc
│   │           │       │   │   ├── _re.cpython-313.pyc
│   │           │       │   │   └── _types.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   ├── _re.py
│   │           │       │   └── _types.py
│   │           │       ├── tomli_w
│   │           │       │   ├── __init__.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   └── _writer.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   └── _writer.py
│   │           │       ├── truststore
│   │           │       │   ├── _api.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── _macos.py
│   │           │       │   ├── _openssl.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── _api.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── _macos.cpython-313.pyc
│   │           │       │   │   ├── _openssl.cpython-313.pyc
│   │           │       │   │   ├── _ssl_constants.cpython-313.pyc
│   │           │       │   │   └── _windows.cpython-313.pyc
│   │           │       │   ├── py.typed
│   │           │       │   ├── _ssl_constants.py
│   │           │       │   └── _windows.py
│   │           │       ├── typing_extensions.py
│   │           │       ├── urllib3
│   │           │       │   ├── _collections.py
│   │           │       │   ├── connectionpool.py
│   │           │       │   ├── connection.py
│   │           │       │   ├── contrib
│   │           │       │   │   ├── _appengine_environ.py
│   │           │       │   │   ├── appengine.py
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── ntlmpool.py
│   │           │       │   │   ├── __pycache__
│   │           │       │   │   │   ├── appengine.cpython-313.pyc
│   │           │       │   │   │   ├── _appengine_environ.cpython-313.pyc
│   │           │       │   │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   │   ├── ntlmpool.cpython-313.pyc
│   │           │       │   │   │   ├── pyopenssl.cpython-313.pyc
│   │           │       │   │   │   ├── securetransport.cpython-313.pyc
│   │           │       │   │   │   └── socks.cpython-313.pyc
│   │           │       │   │   ├── pyopenssl.py
│   │           │       │   │   ├── _securetransport
│   │           │       │   │   │   ├── bindings.py
│   │           │       │   │   │   ├── __init__.py
│   │           │       │   │   │   ├── low_level.py
│   │           │       │   │   │   └── __pycache__
│   │           │       │   │   │       ├── bindings.cpython-313.pyc
│   │           │       │   │   │       ├── __init__.cpython-313.pyc
│   │           │       │   │   │       └── low_level.cpython-313.pyc
│   │           │       │   │   ├── securetransport.py
│   │           │       │   │   └── socks.py
│   │           │       │   ├── exceptions.py
│   │           │       │   ├── fields.py
│   │           │       │   ├── filepost.py
│   │           │       │   ├── __init__.py
│   │           │       │   ├── packages
│   │           │       │   │   ├── backports
│   │           │       │   │   │   ├── __init__.py
│   │           │       │   │   │   ├── makefile.py
│   │           │       │   │   │   ├── __pycache__
│   │           │       │   │   │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   │   │   ├── makefile.cpython-313.pyc
│   │           │       │   │   │   │   └── weakref_finalize.cpython-313.pyc
│   │           │       │   │   │   └── weakref_finalize.py
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── __pycache__
│   │           │       │   │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   │   └── six.cpython-313.pyc
│   │           │       │   │   └── six.py
│   │           │       │   ├── poolmanager.py
│   │           │       │   ├── __pycache__
│   │           │       │   │   ├── _collections.cpython-313.pyc
│   │           │       │   │   ├── connection.cpython-313.pyc
│   │           │       │   │   ├── connectionpool.cpython-313.pyc
│   │           │       │   │   ├── exceptions.cpython-313.pyc
│   │           │       │   │   ├── fields.cpython-313.pyc
│   │           │       │   │   ├── filepost.cpython-313.pyc
│   │           │       │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   ├── poolmanager.cpython-313.pyc
│   │           │       │   │   ├── request.cpython-313.pyc
│   │           │       │   │   ├── response.cpython-313.pyc
│   │           │       │   │   └── _version.cpython-313.pyc
│   │           │       │   ├── request.py
│   │           │       │   ├── response.py
│   │           │       │   ├── util
│   │           │       │   │   ├── connection.py
│   │           │       │   │   ├── __init__.py
│   │           │       │   │   ├── proxy.py
│   │           │       │   │   ├── __pycache__
│   │           │       │   │   │   ├── connection.cpython-313.pyc
│   │           │       │   │   │   ├── __init__.cpython-313.pyc
│   │           │       │   │   │   ├── proxy.cpython-313.pyc
│   │           │       │   │   │   ├── queue.cpython-313.pyc
│   │           │       │   │   │   ├── request.cpython-313.pyc
│   │           │       │   │   │   ├── response.cpython-313.pyc
│   │           │       │   │   │   ├── retry.cpython-313.pyc
│   │           │       │   │   │   ├── ssl_.cpython-313.pyc
│   │           │       │   │   │   ├── ssl_match_hostname.cpython-313.pyc
│   │           │       │   │   │   ├── ssltransport.cpython-313.pyc
│   │           │       │   │   │   ├── timeout.cpython-313.pyc
│   │           │       │   │   │   ├── url.cpython-313.pyc
│   │           │       │   │   │   └── wait.cpython-313.pyc
│   │           │       │   │   ├── queue.py
│   │           │       │   │   ├── request.py
│   │           │       │   │   ├── response.py
│   │           │       │   │   ├── retry.py
│   │           │       │   │   ├── ssl_match_hostname.py
│   │           │       │   │   ├── ssl_.py
│   │           │       │   │   ├── ssltransport.py
│   │           │       │   │   ├── timeout.py
│   │           │       │   │   ├── url.py
│   │           │       │   │   └── wait.py
│   │           │       │   └── _version.py
│   │           │       └── vendor.txt
│   │           └── pip-25.1.1.dist-info
│   │               ├── entry_points.txt
│   │               ├── INSTALLER
│   │               ├── licenses
│   │               │   ├── AUTHORS.txt
│   │               │   └── LICENSE.txt
│   │               ├── METADATA
│   │               ├── RECORD
│   │               ├── REQUESTED
│   │               ├── top_level.txt
│   │               └── WHEEL
│   ├── lib64 -> lib
│   └── pyvenv.cfg
└── weather
    ├── bundle.js
    ├── conf.lua
    ├── dist
    │   └── weather
    ├── ilovereact
    │   ├── native
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   ├── errorReporter.ts
    │   │   │   ├── eventDispatcher.ts
    │   │   │   ├── hostConfig.ts
    │   │   │   ├── index.ts
    │   │   │   ├── Love2DApp.ts
    │   │   │   ├── measureText.ts
    │   │   │   ├── NativeBridge.ts
    │   │   │   └── NativeRenderer.ts
    │   │   └── tsconfig.json
    │   └── shared
    │       ├── package.json
    │       ├── src
    │       │   ├── animation.ts
    │       │   ├── Badge.tsx
    │       │   ├── bridge.ts
    │       │   ├── Card.tsx
    │       │   ├── Checkbox.tsx
    │       │   ├── context.ts
    │       │   ├── Divider.tsx
    │       │   ├── FlatList.tsx
    │       │   ├── FlexColumn.tsx
    │       │   ├── FlexRow.tsx
    │       │   ├── hooks.ts
    │       │   ├── index.ts
    │       │   ├── Modal.tsx
    │       │   ├── Portal.tsx
    │       │   ├── Pressable.tsx
    │       │   ├── primitives.tsx
    │       │   ├── Radio.tsx
    │       │   ├── ScrollView.tsx
    │       │   ├── Select.tsx
    │       │   ├── Slider.tsx
    │       │   ├── Spacer.tsx
    │       │   ├── Switch.tsx
    │       │   ├── TextEditor.tsx
    │       │   ├── TextInput.tsx
    │       │   └── types.ts
    │       └── tsconfig.json
    ├── lib
    │   └── libquickjs.so
    ├── lua
    │   ├── bridge_fs.lua
    │   ├── bridge_quickjs.lua
    │   ├── errors.lua
    │   ├── events.lua
    │   ├── focus.lua
    │   ├── images.lua
    │   ├── init.lua
    │   ├── inspector.lua
    │   ├── layout.lua
    │   ├── measure.lua
    │   ├── painter.lua
    │   ├── screenshot.lua
    │   ├── target_love2d.lua
    │   ├── texteditor.lua
    │   ├── tree.lua
    │   └── zindex.lua
    ├── main.lua
    ├── meta.json
    ├── node_modules
    │   ├── csstype
    │   │   ├── index.d.ts
    │   │   ├── index.js.flow
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── @esbuild
    │   │   └── linux-x64
    │   │       ├── bin
    │   │       │   └── esbuild
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── esbuild
    │   │   ├── bin
    │   │   │   └── esbuild
    │   │   ├── install.js
    │   │   ├── lib
    │   │   │   ├── main.d.ts
    │   │   │   └── main.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── js-tokens
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── loose-envify
    │   │   ├── cli.js
    │   │   ├── custom.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── loose-envify.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── replace.js
    │   ├── react
    │   │   ├── cjs
    │   │   │   ├── react.development.js
    │   │   │   ├── react-jsx-dev-runtime.development.js
    │   │   │   ├── react-jsx-dev-runtime.production.min.js
    │   │   │   ├── react-jsx-dev-runtime.profiling.min.js
    │   │   │   ├── react-jsx-runtime.development.js
    │   │   │   ├── react-jsx-runtime.production.min.js
    │   │   │   ├── react-jsx-runtime.profiling.min.js
    │   │   │   ├── react.production.min.js
    │   │   │   ├── react.shared-subset.development.js
    │   │   │   └── react.shared-subset.production.min.js
    │   │   ├── index.js
    │   │   ├── jsx-dev-runtime.js
    │   │   ├── jsx-runtime.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── react.shared-subset.js
    │   │   ├── README.md
    │   │   └── umd
    │   │       ├── react.development.js
    │   │       ├── react.production.min.js
    │   │       └── react.profiling.min.js
    │   ├── react-reconciler
    │   │   ├── cjs
    │   │   │   ├── react-reconciler-constants.development.js
    │   │   │   ├── react-reconciler-constants.production.min.js
    │   │   │   ├── react-reconciler.development.js
    │   │   │   ├── react-reconciler.production.min.js
    │   │   │   ├── react-reconciler.profiling.min.js
    │   │   │   ├── react-reconciler-reflection.development.js
    │   │   │   └── react-reconciler-reflection.production.min.js
    │   │   ├── constants.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── reflection.js
    │   ├── scheduler
    │   │   ├── cjs
    │   │   │   ├── scheduler.development.js
    │   │   │   ├── scheduler.production.min.js
    │   │   │   ├── scheduler-unstable_mock.development.js
    │   │   │   ├── scheduler-unstable_mock.production.min.js
    │   │   │   ├── scheduler-unstable_post_task.development.js
    │   │   │   └── scheduler-unstable_post_task.production.min.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── umd
    │   │   │   ├── scheduler.development.js
    │   │   │   ├── scheduler.production.min.js
    │   │   │   ├── scheduler.profiling.min.js
    │   │   │   ├── scheduler-unstable_mock.development.js
    │   │   │   └── scheduler-unstable_mock.production.min.js
    │   │   ├── unstable_mock.js
    │   │   └── unstable_post_task.js
    │   ├── @types
    │   │   ├── prop-types
    │   │   │   ├── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── react
    │   │       ├── canary.d.ts
    │   │       ├── experimental.d.ts
    │   │       ├── global.d.ts
    │   │       ├── index.d.ts
    │   │       ├── jsx-dev-runtime.d.ts
    │   │       ├── jsx-runtime.d.ts
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       ├── README.md
    │   │       └── ts5.0
    │   │           ├── canary.d.ts
    │   │           ├── experimental.d.ts
    │   │           ├── global.d.ts
    │   │           ├── index.d.ts
    │   │           ├── jsx-dev-runtime.d.ts
    │   │           └── jsx-runtime.d.ts
    │   └── typescript
    │       ├── bin
    │       │   ├── tsc
    │       │   └── tsserver
    │       ├── lib
    │       │   ├── cs
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── de
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── es
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── fr
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── it
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── ja
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── ko
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── lib.decorators.d.ts
    │       │   ├── lib.decorators.legacy.d.ts
    │       │   ├── lib.dom.asynciterable.d.ts
    │       │   ├── lib.dom.d.ts
    │       │   ├── lib.dom.iterable.d.ts
    │       │   ├── lib.d.ts
    │       │   ├── lib.es2015.collection.d.ts
    │       │   ├── lib.es2015.core.d.ts
    │       │   ├── lib.es2015.d.ts
    │       │   ├── lib.es2015.generator.d.ts
    │       │   ├── lib.es2015.iterable.d.ts
    │       │   ├── lib.es2015.promise.d.ts
    │       │   ├── lib.es2015.proxy.d.ts
    │       │   ├── lib.es2015.reflect.d.ts
    │       │   ├── lib.es2015.symbol.d.ts
    │       │   ├── lib.es2015.symbol.wellknown.d.ts
    │       │   ├── lib.es2016.array.include.d.ts
    │       │   ├── lib.es2016.d.ts
    │       │   ├── lib.es2016.full.d.ts
    │       │   ├── lib.es2016.intl.d.ts
    │       │   ├── lib.es2017.arraybuffer.d.ts
    │       │   ├── lib.es2017.date.d.ts
    │       │   ├── lib.es2017.d.ts
    │       │   ├── lib.es2017.full.d.ts
    │       │   ├── lib.es2017.intl.d.ts
    │       │   ├── lib.es2017.object.d.ts
    │       │   ├── lib.es2017.sharedmemory.d.ts
    │       │   ├── lib.es2017.string.d.ts
    │       │   ├── lib.es2017.typedarrays.d.ts
    │       │   ├── lib.es2018.asyncgenerator.d.ts
    │       │   ├── lib.es2018.asynciterable.d.ts
    │       │   ├── lib.es2018.d.ts
    │       │   ├── lib.es2018.full.d.ts
    │       │   ├── lib.es2018.intl.d.ts
    │       │   ├── lib.es2018.promise.d.ts
    │       │   ├── lib.es2018.regexp.d.ts
    │       │   ├── lib.es2019.array.d.ts
    │       │   ├── lib.es2019.d.ts
    │       │   ├── lib.es2019.full.d.ts
    │       │   ├── lib.es2019.intl.d.ts
    │       │   ├── lib.es2019.object.d.ts
    │       │   ├── lib.es2019.string.d.ts
    │       │   ├── lib.es2019.symbol.d.ts
    │       │   ├── lib.es2020.bigint.d.ts
    │       │   ├── lib.es2020.date.d.ts
    │       │   ├── lib.es2020.d.ts
    │       │   ├── lib.es2020.full.d.ts
    │       │   ├── lib.es2020.intl.d.ts
    │       │   ├── lib.es2020.number.d.ts
    │       │   ├── lib.es2020.promise.d.ts
    │       │   ├── lib.es2020.sharedmemory.d.ts
    │       │   ├── lib.es2020.string.d.ts
    │       │   ├── lib.es2020.symbol.wellknown.d.ts
    │       │   ├── lib.es2021.d.ts
    │       │   ├── lib.es2021.full.d.ts
    │       │   ├── lib.es2021.intl.d.ts
    │       │   ├── lib.es2021.promise.d.ts
    │       │   ├── lib.es2021.string.d.ts
    │       │   ├── lib.es2021.weakref.d.ts
    │       │   ├── lib.es2022.array.d.ts
    │       │   ├── lib.es2022.d.ts
    │       │   ├── lib.es2022.error.d.ts
    │       │   ├── lib.es2022.full.d.ts
    │       │   ├── lib.es2022.intl.d.ts
    │       │   ├── lib.es2022.object.d.ts
    │       │   ├── lib.es2022.regexp.d.ts
    │       │   ├── lib.es2022.string.d.ts
    │       │   ├── lib.es2023.array.d.ts
    │       │   ├── lib.es2023.collection.d.ts
    │       │   ├── lib.es2023.d.ts
    │       │   ├── lib.es2023.full.d.ts
    │       │   ├── lib.es2023.intl.d.ts
    │       │   ├── lib.es2024.arraybuffer.d.ts
    │       │   ├── lib.es2024.collection.d.ts
    │       │   ├── lib.es2024.d.ts
    │       │   ├── lib.es2024.full.d.ts
    │       │   ├── lib.es2024.object.d.ts
    │       │   ├── lib.es2024.promise.d.ts
    │       │   ├── lib.es2024.regexp.d.ts
    │       │   ├── lib.es2024.sharedmemory.d.ts
    │       │   ├── lib.es2024.string.d.ts
    │       │   ├── lib.es5.d.ts
    │       │   ├── lib.es6.d.ts
    │       │   ├── lib.esnext.array.d.ts
    │       │   ├── lib.esnext.collection.d.ts
    │       │   ├── lib.esnext.decorators.d.ts
    │       │   ├── lib.esnext.disposable.d.ts
    │       │   ├── lib.esnext.d.ts
    │       │   ├── lib.esnext.error.d.ts
    │       │   ├── lib.esnext.float16.d.ts
    │       │   ├── lib.esnext.full.d.ts
    │       │   ├── lib.esnext.intl.d.ts
    │       │   ├── lib.esnext.iterator.d.ts
    │       │   ├── lib.esnext.promise.d.ts
    │       │   ├── lib.esnext.sharedmemory.d.ts
    │       │   ├── lib.scripthost.d.ts
    │       │   ├── lib.webworker.asynciterable.d.ts
    │       │   ├── lib.webworker.d.ts
    │       │   ├── lib.webworker.importscripts.d.ts
    │       │   ├── lib.webworker.iterable.d.ts
    │       │   ├── pl
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── pt-br
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── ru
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── tr
    │       │   │   └── diagnosticMessages.generated.json
    │       │   ├── _tsc.js
    │       │   ├── tsc.js
    │       │   ├── _tsserver.js
    │       │   ├── tsserver.js
    │       │   ├── tsserverlibrary.d.ts
    │       │   ├── tsserverlibrary.js
    │       │   ├── typescript.d.ts
    │       │   ├── typescript.js
    │       │   ├── typesMap.json
    │       │   ├── _typingsInstaller.js
    │       │   ├── typingsInstaller.js
    │       │   ├── watchGuard.js
    │       │   ├── zh-cn
    │       │   │   └── diagnosticMessages.generated.json
    │       │   └── zh-tw
    │       │       └── diagnosticMessages.generated.json
    │       ├── LICENSE.txt
    │       ├── package.json
    │       ├── README.md
    │       ├── SECURITY.md
    │       └── ThirdPartyNoticeText.txt
    ├── package.json
    ├── package-lock.json
    ├── src
    │   ├── App.tsx
    │   └── main.tsx
    └── tsconfig.json

611 directories, 3752 files
