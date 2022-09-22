package actions;

import org.openqa.selenium.WebDriver;

import elements.EbayAdvancedSearch_Elements;
import steps.Global_Hooks;

public class EbayAdvancedSearch_Actions {
	private WebDriver driver;
	EbayAdvancedSearch_Elements ebayadvancedsearch_elements;

	//Constructor
	public EbayAdvancedSearch_Actions(Global_Hooks global_hooks) {
		this.driver = global_hooks.getDriver();
		ebayadvancedsearch_elements = new EbayAdvancedSearch_Elements(driver);
	}
	
	//Methods/Actions
	public void clickonEbayLogo() {
		ebayadvancedsearch_elements.ebayLogo.click();
	}
	public void enterSearchString(String stringtext) {
		ebayadvancedsearch_elements.searchString.sendKeys(stringtext);
	}
	public void enterExcludeString(String excludetext) {
		ebayadvancedsearch_elements.excludeString.sendKeys(excludetext);
	}
	public void enterMinPrice(String minp) {
		ebayadvancedsearch_elements.minPrice.sendKeys(minp);
	}
	public void enterMaxPrice(String maxp) {
		ebayadvancedsearch_elements.maxPrice.sendKeys(maxp);
	}
	public void clickOnSearchBtn() {
		ebayadvancedsearch_elements.searchBtn.click();
	}

}
