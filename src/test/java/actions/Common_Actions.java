package actions;

import org.openqa.selenium.WebDriver;

import elements.EbayAdvancedSearch_Elements;
import steps.Global_Hooks;

public class Common_Actions { //common actions in all pages

	private WebDriver driver;
	Global_Hooks global_hooks;

	//Constructor
	public Common_Actions(Global_Hooks global_hooks) {
		this.driver = global_hooks.getDriver();
	}
	
	//Methods/Actions
	public void goToUrl(String url) {
		driver.get(url);
	}
	
	public String getCurrentPageUrl() {
		return driver.getCurrentUrl();
	}
	
	public String getCurrentPageTitle() {
		return driver.getTitle();
	}
	
	public void quitWebDriver() {
		driver.quit();
	}
}
