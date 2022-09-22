$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Ebay_AdvSearch.feature");
formatter.feature({
  "name": "Ebay Advanced Search Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Ebay Logo on Advanced Search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PA"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Advanced Search Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_AdvSearch_Steps.i_am_on_Advanced_Search_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Ebay logo",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_AdvSearch_Steps.i_click_on_Ebay_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Ebay Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebay_AdvSearch_Steps.i_navigate_to_Ebay_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Advanced search for an item",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PB"
    },
    {
      "name": "@setCookies"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Advanced Search Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_AdvSearch_Steps.i_am_on_Advanced_Search_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am doing an advanced search for an item",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_AdvSearch_Steps.i_am_doing_an_advanced_search_for_an_item(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:features/Ebay_Home.feature");
formatter.feature({
  "name": "Ebay Home Page Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Advanced Search Link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@P1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_am_on_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Advanced link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_click_on_advanced_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Advanced Search page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_navigate_to_advanced_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search items count",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@P2"
    },
    {
      "name": "@setCookies"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_am_on_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \u0027iphone 11\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_search_for_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate at least 1000 items are present",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_validate_at_least_items_are_present(int)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression h1.srp-controls__count-heading\u003espan.BOLD:first-child because of the following error:\nNamespaceError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027h1.srp-controls__count-heading\u003espan.BOLD:first-child\u0027 contains unresolvable namespaces.\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BOL-LT-220901C\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\RODRIG~1.CAM\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57258}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c0a2f073776fdbef18ab4281e405fe59\n*** Element info: {Using\u003dxpath, value\u003dh1.srp-controls__count-heading\u003espan.BOLD:first-child}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.getText(Unknown Source)\r\n\tat actions.EbayHome_Actions.getSearchItemsCount(EbayHome_Actions.java:35)\r\n\tat steps.Ebay_Home_Steps.i_validate_at_least_items_are_present(Ebay_Home_Steps.java:59)\r\n\tat ✽.I validate at least 1000 items are present(file:///C:/Users/rodrigo.campos/eclipse-workspace/unosquarePractice/UnosquareCucumber+POM/features/Ebay_Home.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search items count2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@P3"
    },
    {
      "name": "@setCookies"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_am_on_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \u0027Toy Cars\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_search_for_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate at least 50 items are present",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_validate_at_least_items_are_present(int)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression h1.srp-controls__count-heading\u003espan.BOLD:first-child because of the following error:\nNamespaceError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027h1.srp-controls__count-heading\u003espan.BOLD:first-child\u0027 contains unresolvable namespaces.\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BOL-LT-220901C\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\RODRIG~1.CAM\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57299}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 54b0ccd0e1e006c3c9ef80e97216fc4f\n*** Element info: {Using\u003dxpath, value\u003dh1.srp-controls__count-heading\u003espan.BOLD:first-child}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.getText(Unknown Source)\r\n\tat actions.EbayHome_Actions.getSearchItemsCount(EbayHome_Actions.java:35)\r\n\tat steps.Ebay_Home_Steps.i_validate_at_least_items_are_present(Ebay_Home_Steps.java:59)\r\n\tat ✽.I validate at least 50 items are present(file:///C:/Users/rodrigo.campos/eclipse-workspace/unosquarePractice/UnosquareCucumber+POM/features/Ebay_Home.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search an items in category",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@P4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_am_on_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \u0027soap\u0027 in \u0027Baby\u0027 category",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_search_for_in_category(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate at least 50 items are present",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_validate_at_least_items_are_present(int)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression h1.srp-controls__count-heading\u003espan.BOLD:first-child because of the following error:\nNamespaceError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027h1.srp-controls__count-heading\u003espan.BOLD:first-child\u0027 contains unresolvable namespaces.\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BOL-LT-220901C\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\RODRIG~1.CAM\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57343}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 971dd2d5494acd74a1ebfe27ee5a66ed\n*** Element info: {Using\u003dxpath, value\u003dh1.srp-controls__count-heading\u003espan.BOLD:first-child}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.getText(Unknown Source)\r\n\tat actions.EbayHome_Actions.getSearchItemsCount(EbayHome_Actions.java:35)\r\n\tat steps.Ebay_Home_Steps.i_validate_at_least_items_are_present(Ebay_Home_Steps.java:59)\r\n\tat ✽.I validate at least 50 items are present(file:///C:/Users/rodrigo.campos/eclipse-workspace/unosquarePractice/UnosquareCucumber+POM/features/Ebay_Home.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Home page links",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@P5"
    }
  ]
});
formatter.step({
  "name": "I am on Ebay Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on menu option \u0027\u003clink\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I validate that page navigates to \u0027\u003curl\u003e\u0027 and title is \u0027\u003ctitle\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "link",
        "url",
        "title"
      ]
    },
    {
      "cells": [
        "Motors",
        "https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479",
        "Buy Auto Parts"
      ]
    },
    {
      "cells": [
        "Fashion",
        "https://www.ebay.com/b/Clothing-Shoes-Accessories/11450/bn_1852545",
        "Clothing"
      ]
    },
    {
      "cells": [
        "Sports",
        "https://www.ebay.com/b/Sporting-Goods/888/bn_1865031",
        "Sporting"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Home page links",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@P5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_am_on_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on menu option \u0027Motors\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_click_on_menu_option(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Motors\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BOL-LT-220901C\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\RODRIG~1.CAM\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57408}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d92d01b4cbf89f5083144b04120c4743\n*** Element info: {Using\u003dlink text, value\u003dMotors}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat actions.EbayHome_Actions.clickOnLinkByText(EbayHome_Actions.java:52)\r\n\tat steps.Ebay_Home_Steps.i_click_on_menu_option(Ebay_Home_Steps.java:77)\r\n\tat ✽.I click on menu option \u0027Motors\u0027(file:///C:/Users/rodrigo.campos/eclipse-workspace/unosquarePractice/UnosquareCucumber+POM/features/Ebay_Home.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate that page navigates to \u0027https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479\u0027 and title is \u0027Buy Auto Parts\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_validate_that_page_navigates_to_and_title_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page links",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@P5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_am_on_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on menu option \u0027Fashion\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_click_on_menu_option(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Fashion\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BOL-LT-220901C\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\RODRIG~1.CAM\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57442}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 749d8c620770902e443c2b1eb5945ec0\n*** Element info: {Using\u003dlink text, value\u003dFashion}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat actions.EbayHome_Actions.clickOnLinkByText(EbayHome_Actions.java:52)\r\n\tat steps.Ebay_Home_Steps.i_click_on_menu_option(Ebay_Home_Steps.java:77)\r\n\tat ✽.I click on menu option \u0027Fashion\u0027(file:///C:/Users/rodrigo.campos/eclipse-workspace/unosquarePractice/UnosquareCucumber+POM/features/Ebay_Home.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate that page navigates to \u0027https://www.ebay.com/b/Clothing-Shoes-Accessories/11450/bn_1852545\u0027 and title is \u0027Clothing\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_validate_that_page_navigates_to_and_title_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Home page links",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@P5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_am_on_ebay_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on menu option \u0027Sports\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_click_on_menu_option(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sports\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BOL-LT-220901C\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\RODRIG~1.CAM\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57478}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4f66abad01a315a37cad6985811469f7\n*** Element info: {Using\u003dlink text, value\u003dSports}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat actions.EbayHome_Actions.clickOnLinkByText(EbayHome_Actions.java:52)\r\n\tat steps.Ebay_Home_Steps.i_click_on_menu_option(Ebay_Home_Steps.java:77)\r\n\tat ✽.I click on menu option \u0027Sports\u0027(file:///C:/Users/rodrigo.campos/eclipse-workspace/unosquarePractice/UnosquareCucumber+POM/features/Ebay_Home.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate that page navigates to \u0027https://www.ebay.com/b/Sporting-Goods/888/bn_1865031\u0027 and title is \u0027Sporting\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Ebay_Home_Steps.i_validate_that_page_navigates_to_and_title_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});