import { LocalizedSteps, registerLocalization, LocalizedLabels } from '../localization';
const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Angular 升級指南',
  'Select the options matching your project:': '選擇與您的項目匹配的選項:',
  'Angular Versions': 'Angular 版本',
  'From': '從',
  'To': '到',
  'Warning': '警告',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    '當前主要版本之後的發布計劃尚未最終確定，並且可能會更改。這些建議是基於準備規劃要棄用的。',
  'We do not currently support downgrading versions of Angular.':
    '我們目前不支持降級 Angular 版本。',
  'We do not recommend moving across multiple major versions.':
    '我們不建議跨多個主要版本進行遷移。',
  'App Complexity': '應用程序複雜度',
  'Basic': '基本',
  'Medium': '中等',
  'Advanced': '高級',
  'Show update information relevant to all Angular developers.':
    '顯示與所有 Angular 開發人員相關的更新信息。',
  'Show more specific update information relevant to around 10% of Angular developers.':
    '顯示與大約 10％ 的 Angular 開發人員相關的更具體的更新信息。',
  'Show all the information we have about the update.': '顯示我們擁有的有關更新的所有信息。',
  'Other Dependencies': '其他依賴',
  'I use': '使用了',
  'to combine AngularJS &amp; Angular': '兼容 AngularJS 和 Angular',
  'Package Manager': '包管理器',
  'Show me how to update!': '告訴我如何更新',
  'Before Updating': '更新前',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed before moving between these versions.":
    '目前在這兩個版本間變化無需任何改變。',
  'During the Update': '更新期間',
  // tslint:disable-next-line: quotemark
  "There aren't currently any recommendations for moving between these versions.":
    '目前在這兩個版本間變化沒有任何建議。',
  'After the Update': '更新后',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed after moving between these versions.":
    '目前在這兩個版本間變化后沒有任何改變。',
  'for': '對於',
  'Basic Apps': '基本應用程序',
  'Medium Apps': '中等應用程序',
  'Advanced Apps': '高級應用程序',
};
const steps: LocalizedSteps = {
  'Extends OnInit': {
    action:
      '確保您不對任何生命周期事件使用 `extends OnInit` 或 `extends`，而應使用 `implements `'
  },
  'Deep Imports': {
    action:
      '停止使用深度導入(deep imports)，這些符號現在已標記為 ɵ，並且不屬於我們的公共API。'
  },
  'invokeElementMethod': {
    action:
      '停止使用 `Renderer.invokeElementMethod`，因為該方法已被刪除，目前沒有替代方法。'
  },
  'Non Animations Module': {
    action:
      '如果您在應用程序中使用動畫，你應該在 `NgModule` 導入來自 `@angular/platform-browser/animations` 的 `BrowserAnimationsModule`。'
  },
  'Native Form Validation': {
    action:
      '當您包含 `FormsModule` 時，Angular 開始向表單元素添加一個 `novalidate` 屬性，重新啟用原始(Native)表單驗證使用 `ngNoForm` 或添加 `ngNativeValidate`。'
  },
  'RootRenderer': {
    action:
      '用 `RendererFactoryV2` 代替 `RootRenderer`。'
  },
  'downgradeInjectable': {
    action:
      '`upgrade/static/downgradeInjectable` 的返回值已更改。'
  },
  'Animations Tests': {
    action:
      '如果您使用動畫和測試，請將 `mods[1].NoopAnimationsModule` 添加到您的 `TestBed.initTestEnvironment` 調用中。'
  },
  'DefaultIterableDiffer': {
    action:
      '停止使用 `DefaultIterableDiffer`， `KeyValueDiffers#factories`，或 `IterableDiffers#factories`'
  },
  'Template Tag': {
    action: '將您的 `template` 標籤重命名為 `ng-template`'
  },
  'OpaqueToken': {
    action: '用 `InjectionToken` 替換 `OpaqueToken`。'
  },
  'DifferFactory': {
    action: '如果調用 `DifferFactory.create(...)`，則刪除 `ChangeDetectorRef` 參數。'
  },
  'ErrorHandler Parameter': {
    action: '停用所有將參數傳遞給 ErrorHandler 的構造函數'
  },
  'ngProbeToken': {
    action: '如果使用 ngProbeToken，請確保從 @angular/core 而不是 @angular/platform-browser 導入'
  },
  'TrackByFn': {
    action: '如果您使用 TrackByFn，請改用 TrackByFunction'
  },
  'i18n Pipe Change': {
    action: '如果您依賴日期(date)，貨幣(currency)，十進制(decimal)或百分比管道(percent pipes)，則在 5 中您會看到格式的細微變化。除了 en-us 語言環境的應用程序，都需要選擇從 `@angular/common/i18n_data/locale_fr` 和 registerLocaleData(local) 中導入 `locale_extended_fr`。'
  },
  'gendir': {
    action: '不要依賴 `gendir`，而要使用 `skipTemplateCodeGen`。了解詳情'
  },
  'Dynamic ngUpgrade': {
    action: '替換從 `@angular/upgrade` 導入的 `downgradeComponent`、`downgradeInjectable`、`UpgradeComponent` 和 `UpgradeModule`。而是在 `@angular/upgrade/static` 中使用新版本'
  },
  'Animations in Core': {
    action: '如果從 @angular/core 導入了任何動畫服務(animations services)或工具(tools)，則應從 @angular/animations 導入它們。'
  },
  'ngOutletContext': {
    action: '將 `ngOutletContext` 替換為 `ngTemplateOutletContext`.'
  },
  'collectionChangeRecord': {
    action: '將 `CollectionChangeRecord` 替換為 `IterableChangeRecord`'
  },
  'Renderer': {
    action: '無論在那裡使用了 Renderer，現在都使用 Renderer2'
  },
  'Router Query Params': {
    action: '如果使用了 preserveQueryParams，請使用 queryParamsHandling 代替'
  },
  'Http': {
    action: '如果使用了舊版的 `HttpModule` 和 `Http` 服務，請切換到 `HttpClientModule` 和 `HttpClient` 服務。HttpClient 簡化了默認的 ergonomics(不再需要映射(map)到JSON)，並且現在支持類型化的返回值和攔截器。進一步了解 https://angular.io/guide/http'
  },
  'DOCUMENT in @angular/platform-browser': {
    action: '如果使用了 @angular/platform-browser 的 DOCUMENT，要改為從 @angular/common 導入'
  },
  'ReflectiveInjector': {
    action: '無論在那裡使用了 ReflectionInjector，現在都使用 StaticInjector'
  },
  'Whitespace': {
    action: '在 `tsconfig.json` 文件中，將 `angularCompilerOptions` 下的 `preserveWhitespaces` 值設置為 `off`(v6 默認為 off) 以獲得此設置的好處'
  },
  'node 8': {
    action: '請確保使用的是 Node 8 或更高版本'
  },
  'Update to CLI v6': {
    action: '在本地更新 Angular CLI，並將配置更新到新的 angular.json 格式通過運行以下命令:`${packageManagerInstall} @angular/cli@6` `ng update @angular/cli@6`'
    },
  'cli v6 scripts': {
    action: '使用新的 Angular CLI 命令更新 package.json 中的 `scripts`。現在所有的 CLI 命令都使用兩個破折號來表示標誌(flags)(例如 `ng build --prod --source-map`p)，以便與 POSIX 兼容。'
  },
  'Update to Angular v6': {
    action: '將所有 Angular 框架軟件包更新到 v6，並更新正確版本的 RxJS 和 TypeScript。`ng update @angular/core@6` 更新后，TypeScript 和 RxJS 將更準確地作出類型檢查，這可能會暴露現有程序中的類型錯誤。'
    },
  'forms v6': {
    action: '現在在 Angular Forms 中，調用 `AbstractControl#markAsPending` 時，`AbstractControl#statusChanges` 將發出一個 `PENDING` 事件。如果要從 `statusChanges` 中篩選或檢查事件，請確保在調用 `markAsPending` 時考慮新事件。'
  },
  'animations timing': {
    action: '如果在禁用區域(disabled Zone)內從 `AnimationEvent` 使用 totalTime，它將不再報告時間 0。要檢測動畫事件是否報告了禁用動畫，可以使用 `event.disabled` 屬性代替。'
  },
  'ngModel on form control': {
    action: '在 v6 中不推薦使用 ngModel 和 ngModelChange 事件與反應式表單指令(reactive form directives)，而在 v7 中則取消了這個不贊成(deprecated)。'
  },
  'ngModelChange order': {
    action: 'ngModelChange 現在在其控件的 value/validity 更新后發出，而不是在更新之前，以更好地匹配預期。如果依賴於這些事件的順序，則需要跟蹤組件中的舊值。'
  },
  'Update Dependencies for v6': {
    action: '將 Angular Material 更新到最新版本。`ng Update@Angular/Material` 這也會自動遷移不推薦使用的 API。'
    },
  'strictPropertyInitializer': {
    action: '如果您已將 TypeScript 配置為嚴格(如果在 `tsconfig.json` 文件中將 `strict` 設置為 `true`)，請更新 `tsconfig.json` 以禁用 `strictPropertyInitialization` 或將屬性初始化從 `ngOnInit` 中移到構造函數。您可以在 TypeScript 2.7 發行說明了解有關此的更多信息。'
  },
  'update to RxJS 6': {
    action: '移除 RxJS 5 不推薦使用的功能使用 rxjs-tslint 自動更新規則在大多數應用程序中，這需要運行以下兩個命令:`npx rxjs-tslint` `rxjs-5-to-6-migrate -p src/tsconfig.app.json`'
    },
  'remove rxjs-compat': {
    action: '一旦依賴更新到 RxJS 6，請移除 `rxjs-compat`.'
  },
  'use files instead of versionedFiles': {
    action: '如果使用了 Angular Service worker，使用 `files` 替代 `versionedFiles`'
  },
  'TypeScript 3.1': {
    action: 'Angular 現在使用 TypeScript 3.1，了解更多信息：https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html'
  },
  'Node 10': {
    action: 'Angular 現在增加了對 Node 10 的支持: https://nodejs.org/en/blog/release/v10.0.0/'
  },
  'v7 update': {
    action: '在終端中運行 `ng update @angular/cli@7 @angular/core@7` 更新 CLI 和核心框架到 v7。'
  },
  'v7 material update': {
    action: '執行 `ng update @angular/material`，更新到 Angular 7、Angular 8、Angular 9、Angular 10，請對應執行 `ng update @angular/material@7`、`ng update @angular/material@8`、`ng update @angular/material@9`、`ng update @angular/material@10`'
  },
  'v7 material changes': {
    action: '如果使用屏幕截圖作為測試結果，則需要重新生成屏幕截圖文件，因為進行了許多次小的視覺調整。'
  },
  'v7 material deprecations': {
    action: '停止使用 `matRippleSpeedFactor` 和 `baseSpeedFactor` 產生 ripples，使用動畫配置(Animation config)替代'
  },
  'v8 update': {
    action: '在終端中運行 `ng update @angular/cli@8 @angular/core@8` 更新 CLI 和核心框架到 v8。'
  },
  'use ::ng-deep instead of /deep/': {
    action: '使用 `::ng-deep` 替代 `/deep/`, 了解有關 Angular 組件樣式和 ::ng-deep 的更多信息。`/deep/` 和 `::ng-deep` 都不推薦使用，在從瀏覽器和工具(tools)中移除 shadow-piercing descendant 組合器前最好使用 `::ng-deep`。'
  },
  'TypeScript 3.4': {
    action: 'Angular 現在使用 TypeScript 3.4，閱讀更多關於改進類型檢查可能產生的錯誤的信息'
  },
  'node 10': {
    action: '確保正在使用 Node 10 或更高版本'
  },
  'Differential Loading': {
    action: 'CLI 的 build 命令現在可以自動創建一個具有最少 polyfill 的 ES6 構建(build)，和一個適用於較舊瀏覽器的兼容 ES5 構建，並根據瀏覽器加載適當的文件。您可以通過在 `tsconfig.json` 中將 `target` 設置為 `es5` 來取消此更改。了解詳細'
  },
  'CLI Telemetry': {
    action: '使用新版本的 CLI 時，將詢問您是否要選擇共享 CLI 使用數據。您也可以添加自己的 Google Analytics 帳戶。這樣，我們就可以優先考慮哪些 CLI 功能，從而做出更好的決策，並衡量改進的影響。了解詳細'
  },
  'static query timing': {
    action: '如果您使用 `ViewChild` 或 `ContentChild`，則我們將更新解決這些查詢的方式，以使開發人員可以更好地控制。現在，您必須指定更改檢測應在設置結果之前運行。例如：`@ContentChild(\'foo\', {static: false}) foo !: ElementRef;`. `ng update` 會自動更新您的查詢，但會因為使您的查詢成為 `static` 而導致兼容性問題。了解詳細'
  },
  'v8 material update': {
    action: '執行 `ng update @angular/material`，更新到 Angular 7、Angular 8、Angular 9、Angular 10，請對應執行 `ng update @angular/material@7`、`ng update @angular/material@8`、`ng update @angular/material@9`、`ng update @angular/material@10`'
  },
  'deep imports': {
    action: '與其從 `@angular/material` 中導入，不如從特定組件中深度導入。例如： `@angular/material/button`。`ng update` 將自動為您執行此操作。'
  },
  'new loadChildren': {
    action: '對於通過路由器延遲加載的模塊，請確保您正在使用動態導入。在 v9 中刪除了通過字符串導入。`ng update` 會自動處理。'
  },
  'platform deprecated': {
    action: '我們不建議使用 `@angular/platform-webworker`，因為它與 CLI 不兼容。在 Web Worker 中運行 Angular 的渲染架構無法滿足開發人員的需求。您仍然可以將Web worker與Angular一起使用。通過 Web worker 指南了解更多。如果您有需要的用例，請通過 devrel@angular.io 與我們聯繫！'
  },
  'node-sass': {
    action: '我們已經從本地 Sass 編譯器切換到 JavaScript 編譯器。要切換回 native 版本，請將其安裝為devDependency：`npm install node-sass --save-dev`。'
  },
  'schematics async': {
    action: '如果要構建自己的 Schematics，它們可能(potentially)是異步(asynchronous)的。從 8.0 開始，Schematics 都是異步的。'
  },
  'node 10.13': {
    action: '確保正在使用 Node 10.13 或更高版本。'
  },
  'cli v8 latest': {
    action: '在工作區目錄中運行 `ng update @angular/core@8 @angular/cli@8` 以更新到最新的 8.x 版本的 `@angular/core` 和 `@angular/cli` 並提交這些更改。'
  },
  'create commits': {
    action: '您可以選擇將 `--create-commits` (或 `-C`)標誌傳遞給 ng update 命令，以針對每次遷移創建 git commit。'
  },
  'ng update v9': {
    action: '在終端中運行 `ng update @angular/cli@9 @angular/core@8` 更新 CLI 和核心框架到 v9。'
  },
  'typescript 3.8': {
    action: '您的項目現已更新為 TypeScript 3.8，在 TypeScript 3.7 公告 或 TypeScript 3.8 公告閱讀有關新編譯器檢查和錯誤的詳細信息，這些檢查和錯誤可能需要您修復代碼中的問題。'
  },
  // recommendations.ts 中有多個 'update @angular/material'，這裡翻譯為通用版本
  'update @angular/material': {
    action: '執行 `ng update @angular/material`，更新到 Angular 7、Angular 8、Angular 9、Angular 10，請對應執行 `ng update @angular/material@7`、`ng update @angular/material@8`、`ng update @angular/material@9`、`ng update @angular/material@10`'
  },
  'update @nguniversal/hapi-engine': {
    action: '如果您使用 Angular Universal，請根據您使用的引擎運行 `ng update @nguniversal/hapi-engine` 或 `ng update @nguniversal/express-engine`。如果您有第三方依賴項尚未更新其對等依賴項的 Angular 版本，則此步驟可能需要 `--force` 標誌(flag)。'
  },
  'dependencies update': {
    action: '如果您的項目依賴於其他 Angular 庫，我們建議您考慮更新到其最新版本。在某些情況下，可能需要此更新才能解決 API 不兼容的問題。請參考 `ng update` 或 `npm outd` 來了解您過時的庫。'
  },
  'ivy update': {
    action: '在更新到版本 9 的過程中，需要通過代碼遷移對項目進行轉換，以便從代碼庫中刪除所有不兼容或不建議使用的 API 調用。您現在可以查看這些更改，並查閱<a href="https://v9.angular.io/guide/updating-to-version-9" target="_blank">更新至版本 9 </a>以了解有關更改的更多信息。'
  },
  'stylesUpdate': {
    action: '綁定的 CSS 樣式和類以前是“以最終修改為準”的策略來應用的，但是現在遵循已定義的優先級。進一步了解<a href="https://angular.io/guide/style-precedence" target="_blank">樣式優先</a>。'
  },
  'ModuleWithProviders': {
    action: '如果您是庫(library)的作者，並且有返回 `ModuleWithProviders` 的方法(通常通過名為 `forRoot()` 的方法)，則需要指定泛型。<a href="https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic" target="_blank">了解更多</a>'
  },
  'wtf': {
    action: '在版本 8 中已棄用了對 Angular 中的 Web 跟蹤框架的支持。您應該停止使用所有 `wtf*`API。要進行性能跟蹤，我們建議使用<a href="https://developers.google.com/web/tools/lighthouse/audits/user-timing" target="_blank">瀏覽器性能工具</a>。'
  },
  'es5browser': {
    action: '刪除 `angular.json` 中的 `es5BrowserSupport`，並在 `tsconfig.json` 中將 `target` 設置為 `es2015`。Angular 現在使用您的瀏覽器列表來確定是否需要 ES5 構建。ng update 將自動遷移此項。'
  },
  'ngForm selector': {
    action: '如果您使用 `ngForm` 元素選擇器來創建 Angular Forms，則應該使用 `ng-form`。'
  },
  'typings compilation': {
    action: '我們更新了 `tsconfig.app.json` 以限制編譯的文件。如果您依賴於編譯中包含的其他文件，例如 `typings.d.ts` 文件，則需要手動將其添加到編譯中。'
  },
  'debug': {
    action: 'Angular 9 Ivy 是現在默認的渲染引擎，可能出現的兼容性問題，請閱讀 <a href="https://angular.io/guide/ivy-compatibility" target="_blank">Ivy 兼容性指南</a>。'
  },
  'ngcc postinstall': {
    action: '如果您依賴於許多 Angular 庫，則可以考慮<a href="https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation" target="_blank">通過對 package.json 進行少量更改</a>來調用 npm `postinstall` 腳本中的 `ngcc`(Angular Compatibility Compiler)來加快構建速度。'
  },
  'express-universal-server': {
    action: '如果您將 Angular Universal 與 `@nguniversal/express-engine` 或 `@nguniversal/hapi-engine` 一起使用，則會創建多個備份文件。其中一個用於 `server.ts`。如果此文件與默認文件不符，則可能需要手動將一些更改從 `server.ts.bak` 複製到 `server.ts`。'
  },
  'ivy i18n': {
    action: 'Angular 9 引入了一個全局的 `$localize()` 函數，如果您依賴於 Angular 的國際化(i18n)，則需要加載該函數。運行 `ng add @angular/localize` 添加必要的軟件包和代碼修改。請參閱 <a href="https://v9.angular.io/guide/migration-localize" target="_blank">$localize 全局導入遷移指南</a>以了解有關更改的更多信息。'
  },
  'entryComponents': {
    action: '如果您在 NgModules 中指定了 `entryComponents` 或使用了 `ANALYZE_FOR_ENTRY_COMPONENTS`，則可以將其刪除。Ivy 和運行時不再需要它們。'
  },
  'testbed-get': {
    action: '如果您使用 `TestBed.get`，則應改用 `TestBed.inject`。此新方法具有相同的行為，且類型安全。'
  },
  '$localize': {
    action: '如果您使用 Angular 的 i18n 支持，則需要開始使用 `@angular/localize`。請參閱 <a href="https://v9.angular.io/guide/migration-localize" target="_blank">$localize 全局導入遷移指南</a>以了解有關更改的更多信息。'
  },

  'ng update v10': {
    action: '在終端中運行 `ng update @angular/cli@10 @angular/core@10` 更新 CLI 和核心框架到 v10。'
  },
  'browserlist': {
    action: '新項目使用文件名 `.browserslistrc` 而不是 `browserslist` 。ng update 將自動遷移此項。'
  },
  'v10-versions': {
    action: 'Angular 現在需要 `tslint` v6，`tslib` v2 和 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html" target="_blank">TypeScript 3.9</a>。ng update 將自動遷移此項。'
  },
  'styleext': {
    action: '在您的 Angular 原理圖(schematics)中停止使用 `styleext` 或 `spec`。ng update 將自動遷移此項。'
  },
  'classes-without-decorators': {
    action: '在版本10中，不再支持使用Angular功能且沒有Angular裝飾器的類。<a href="https://v10.angular.io/guide/migration-undecorated-classes" target="_blank">了解更多</a>。ng update 將自動遷移此項。'
  },
  'injectable-definitions': {
    action: '從 Angular 9 開始，對 DI 的 @Injectable 裝飾器的實施更加嚴格，不完整的提供程序定義的行為也有所不同。<a href="https://v9.angular.io/guide/migration-injectable" target="_blank">了解更多</a>。ng update 將自動遷移此項。'
  },
  'closure-jsdoc-comments': {
    action: 'Angular 的 NPM 軟件包不再包含 jsdoc 註釋，這是與閉包編譯器一起使用所必需的(極為罕見)。這種支持是實驗性的，僅在某些用例中有效。不久將宣布一條替代的推薦路線。'
  },
  'forms-number-input': {
    action: '如果您使用 Angular 表單，則 `number` 類型的輸入將不再監聽<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/change_event" target="_blank">更改事件</a>(此事件不必為每個更改觸發該值)，而監聽<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/input_event" target="_blank">輸入事件</a>。'
  },
  'forms-length-input': {
    action: '對於 Angular 表單驗證，`minLength` 和 `maxLength` 驗證器將驗證表單控件的值的 length 屬性。'
  },
  'esm5-bundles': {
    action: '<a href="https://g.co/ng/apf" target="_blank">Angular 包格式</a>已更新，已刪除 `esm5` 和 `fesm5` 格式。這些不再分發到 npm 軟件包中。如果您不使用 CLI，則可能需要自己將 Angular 代碼降級為 ES5。'
  },
  'console-errors': {
    action: '有關未知元素的警告現在記錄為錯誤。這不會破壞您的應用程序，但可能會使一些工具無法通過 `console.error` 記錄任何東西。'
  },
  'router-resolver-empty': {
    action: '所有返回 `EMPTY` 的解析器(resolver)都將取消導航(navigation)。如果要允許導航繼續進行，則需要更新解析器以發出一些值(例如，`defaultIfEmpty(...)`，`of(...)`等)。'
  },
  'sw-vary-headers': {
    action: '如果您使用 Angular Service Worker 並通過 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary" target="_blank">Vary Headers</a> 依賴資源，則現在將忽略這些 Headers 以避免跨瀏覽器的行為出現不可預測的情況。為了避免這種情況，請<a href="https://angular.io/guide/service-worker-config" target="_blank">配置 service worker</a> 以避免緩存這些資源。'
  },
  'expression-changed-after-checked-new': {
    action: '您可能會看到在使用 `async` 管道之前未檢測到的 `ExpressionChangedAfterItHaHasBeenChecked` 錯誤。該錯誤以前可能沒有被檢測到，因為兩個 `WrappedValues` 在所有情況下都被視為“相等”，即使檢查時未將其各自的未包裝值。在版本 10 中，`WrappedValue` 已被刪除。'
  },
  'property-binding-change-detection': {
    action: '如果您具有屬性綁定，例如 `[val]=(observable | async).someProperty`，則如果 `someProperty` 的值與先前的發射(emit)相同，則它將不再觸發更改檢測。如果您依賴於此，請根據需要手動訂閱並調用 `markForCheck` 或更新綁定以確保引用更改。'
  },
  'day-periods-crossing-midnight': {
    action: '如果您使用 `formatDate()` 或 `DatePipe` 以及 `b` 或 `B` 格式的代碼，則邏輯已更新，以便與一天中跨越午夜的時間段相匹配，因此它現在將呈現正確的輸出，例如在英語中為“night”。'
  },
  'urlmatcher-null': {
    action: '如果您使用 `UrlMatcher`，現在類型反映出它始終可以返回 `null`。'
  },
  'v10-more-details': {
    action: '有關棄用，自動遷移和更改的更多詳細信息，請訪問 <a href="https://angular.io/guide/updating-to-version-10" target="_blank">Angular 更新到版本 10</a>'
  },
  'universal-baseurl': {
    action: '對於 Angular Universal 用戶，如果使用 `useAbsoluteUrl` 設置 `platform-server`，則現在還需要指定 `baseUrl`。'
  },
  'v11 ng update': {
    action: '運行 `ng update @angular/core@11 @angular/cli@11`， 更新 CLI 和核心框架到 v11。'
  },
  'v11 versions': {
    action: 'Angular 現在需要 <a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/" target="_blank">TypeScript 4.0</a>。ng update 將自動遷移此項。'
  },
  'v11 browser support': {
    action: '不再支持 IE9，IE10 和 IE mobile。這是在 <a href="http://blog.angular.io/version-10-of-angular-now-available-78960babd41#c357" target="_blank">Angular 版本 10 更新</a> 中宣布的。'
  },
  'webpack5 optin': {
    action: '現在可以通過使用 Yarn 且在 `package.json` 中添加 `"resolutions": {"webpack": "^5.0.0"}`  來選擇使用 webpack 5。'
  },
  'ng new strict prompt': {
    action: '生成新項目時，將詢問您是否要啟用嚴格模式。這將配置 TypeScript 和 Angular 編譯器以進行更嚴格的類型檢查，並默認應用更小的包預算(bundle budgets)。可以使用 `--strict=true` 或 `--strict=false` 跳過提示。'
  },
  'v11 router relativeLinkResolution': {
    action: '如果您使用路由(Router)，則 `relativeLinkResolution` 的默認值已從 `legacy` 改為 `corrected`。如果您的應用程序以前未在 ExtraOptions 中指定值而使用了默認值，並且在從空路徑路由的子級導航時使用相對鏈接(relative links)，則需要更新 `RouterModule` 的配置，以專門為 `relativeLinkResolution` 指定 `legacy`。有關更多詳細信息，請參閱<a href="https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution" target="_blank">文檔</a>。'
  },
  'router initialNavigation': {
    action: '在 Angular 路由(Router)中，v4 中為棄用的選項 `initialNavigation` 已被刪除。如果您以前使用過 `enabled` 或 `true`，則現在選擇 `enabledNonBlocking` 或 `enabledBlocking`。如果您以前使用過 `false` 或 `legacy_disabled`，現在使用 `disabled`。'
  },
  'routerlink preserveQueryParams': {
    action: '在 Angular 路由(Router)的 `routerLink` 中，`preserveQueryParams` 已被刪除，請改用 `queryParamsHandling="preserve"`。'
  },
  'routerlink queryParams typing': {
    action: '如果訪問的是 `queryParams`、`fragment`或 `queryParamsHandling` 的 `routerLink` 值，則可能需要放寬類型以同時接受 `undefined` 和 `null`。'
  },
  'viewencapsulation native removed': {
    action: '組件視圖封裝選項 `ViewEncapsulation.Native` 已被刪除。使用 `ViewEncapsulation.ShadowDom` 代替。ng update 將自動遷移此項。'
  },
  'ICU expressions typechecked': {
    action: '如果使用 i18n，現在將再次檢查 Unicode 國際組件(ICU)表達式中的表達式。如果在 ICU 中出現的表達式中發現錯誤，這可能會導致編譯失敗。'
  },
  'forms validators asyncValidators typing': {
    action: '`@angular/forms` 包中的指令過去將 `any[]` 作為構造函數中預期的 `validators` 和 `asyncValidators` 參數的類型。現在這些參數類型正確，因此，如果代碼依賴於 `@angular/forms` 的指令構造函數類型，則可能需要進行一些更新以提高類型安全性。'
  },
  'forms AbstractFormControl': {
    action: '如果您使用 Angular Forms，則 `AbstractFormControl.parent` 的類型現在包含 null。ng update 將自動遷移此項。但是在一個不太可能的情況下，您的代碼是針對 undefined 和 strict equality 來測試父對象的，因此需要將其改為 `=== null`，因為父對象現在顯式地用 `null` 初始化，而不是保持 undefined。'
  },
  'platform-webworker': {
    action: '在 v8 中已棄用了很少使用的 `@angular/platform-webworker` 和 `@angular/platform-webworker-dynamic`，並已將其刪除。在 Web worker 中運行 Angular 的部分內容是一項實驗，在常見的用例中效果不佳。Angular 仍然對 <a href="https://angular.io/guide/web-worker" target="_blank">Web Workers</a> 有很好的支持。'
  },
  'v11 slice pipe typing': {
    action: '`slice` 管道現在為未定義的輸入值返回 null，這與大多數管道的行為一致。'
  },
  'v11 keyvalue typing': {
    action: '`keyvalue` 管道已修復，可以報告具有數字 key 的輸入對象，結果類型將包含鍵的字符串表示形式。已經是這種情況，並且僅對代碼進行了更新以反映這一點。如果他們依賴不正確的類型，請更新管道輸出的使用者。請注意，這不會影響輸入值為 `Map` 的用例，因此，如果需要保留 `number`，這是一種有效的方法。'
  },
  'v11 number pipe typing': {
    action: '現在，數字管道(`decimal`， `percent`， `currency`等)明確說明了接受哪些類型。'
  },
  'v11 date pipe typing': {
    action: '現在，`date` 管道明確說明了接受哪些類型。'
  },
  'v11 datetime rounding': {
    action: '當將日期時間格式的字符串以包含毫秒部分的格式傳遞給 `DatePipe` 時，現在毫秒將取整，而不是取最接近的毫秒。大多數應用程序不會受到此更改的影響。如果這不是期望的行為，則在將字符串傳遞給 `DatePipe` 之前，考慮對其進行預處理以舍入毫秒部分。'
  },
  '11 async pipe typing': {
    action: '`async` 管道不再要求為鍵入為 undefined 的輸入返回 undefined。請注意，代碼實際上在未定義的輸入上返回 null。'
  },
  'v11 case pipe update': {
    action: '`uppercase` 和 `lowercase` 管道不再讓虛假的值通過。現在，它們將 `null` 和 `undefined` 都映射到 `null`，並在無效輸入(`0`， `false`， `NaN`)上引發異常。這與其他 Angular 管道匹配。'
  },
  'v11 router NavigationExtras typing': {
    action: '如果您將路由(Router)與 `NavigationExtras` 一起使用，則新的類型允許傳入類型為 `NavigationExtras` 的變量，但它們將不允許對象文字(object literals)，因為它們可能僅指定已知屬性。他們也將不接受那些與 `Pick` 中的屬性沒有共同屬性的類型。如果您受到此更改的影響，請僅從 NavigationExtras 中指定實際在各個函數調用中使用的屬性，或在對象或變量上使用類型聲明：`as NavigationExtras`。'
  },
  'v11 TestBed.overrideProvider': {
    action: '在測試中，如果在 TestBed 初始化之後調用 `TestBed.overrideProvider`，則不再應用提供程序替代。此行為與其他替代方法(例如 `TestBed.overrideDirective` 等)一致，但它們會拋出錯誤來表明這一點。該檢查以前在 TestBed.overrideProvider 函數中丟失。如果看到此錯誤，則應在完成 TestBed 初始化之前移動 `TestBed.overrideProvider` 調用。'
  },
  'v11 router RouteReuseStrategy': {
    action: '如果使用路由(Router)的 RouteReuseStrategy，參數順序已更改。先前在評估子路由時調用 `RouteReuseStrategy#shouldReuseRoute` 時，它們將使用被交換的 `future` 和 `current` 參數來調用。如果您的 `RouteReuseStrategy` 僅依賴於將來或當前的快照狀態，您可能需要更新 `future` 和 `current`、`ActivateRouteSnapshots` 的 `shouldReuseRoute` 實現。'
  },
  'v11 locale data readonly': {
    action: '如果您使用區域設置數據數組(locale data arrays)，則此 API 現在將返回只讀數組。如果您要對它們進行突變(例如，調用 `sort()`，`push()`，`splice()`等)，則您的代碼將不再編譯。如果您需要更改數組，現在應該獲取副本(例如，通過調用 `slice()`)並更改副本。'
  },
  'v11 CollectionChangeRecord': {
    action: '在更改檢測中，已刪除 `CollectionChangeRecord`，而改用 `IterableChangeRecord`。'
  },
  'v11 forms async validators': {
    action: '如果在初始化時對 `FormControl`、`FormGroup` 或 `FormArray` 類實例上定義的異步驗證器使用 Angular Forms，則在異步驗證器完成後，以前不會發出狀態更改事件。這已被更改，因此status事件被發送到 `statusChanges` observable 中。如果代碼依賴於舊的行為，則可以忽略此附加的狀態更改事件。'
  }
};
// @TODO 此控制台日志是必需的，否则将不会注册区域设置
console.log(`zh-TW registered`);
registerLocalization('zh-TW', steps, uiLabels);
