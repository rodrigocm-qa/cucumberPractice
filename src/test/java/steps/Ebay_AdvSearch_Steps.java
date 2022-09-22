package steps;

import static org.junit.Assert.fail;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import actions.Common_Actions;
import actions.EbayAdvancedSearch_Actions;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Ebay_AdvSearch_Steps {
	//declaring objects:: to get actions
	Common_Actions common_actions;
	EbayAdvancedSearch_Actions ebayadvancedsearch_actions; 
	
	//constructor that will contain the objects as arguments
	public Ebay_AdvSearch_Steps(Common_Actions common_actions, EbayAdvancedSearch_Actions ebayadvancedsearch_actions) {
		// so we can use the object methods
		this.common_actions = common_actions;
		this.ebayadvancedsearch_actions = ebayadvancedsearch_actions;
	}
	
	@Given("I am on Advanced Search Page")
	public void i_am_on_Advanced_Search_Page() {
		common_actions.goToUrl("https://www.ebay.com/sch/ebayadvsearch");
	}

	@When("I click on Ebay logo")
	public void i_click_on_Ebay_logo() {
		ebayadvancedsearch_actions.clickonEbayLogo();
	}

	@Then("I navigate to Ebay Home page")
	public void i_navigate_to_Ebay_Home_page() {
		String expectedURL = "https://www.ebay.com/";
		String actualURL = common_actions.getCurrentPageUrl();
		if (!expectedURL.equals(actualURL)) {
			fail("Page does not navigate to Home page");
		}
	}
	
	@When("I am doing an advanced search for an item")
	public void i_am_doing_an_advanced_search_for_an_item(DataTable dataTable) throws Exception {
		//Row 1 Column 0 to get the keyword
		ebayadvancedsearch_actions.enterSearchString(dataTable.cell(1, 0)); 
		//Row 1 Column 1 to get the exclude
		ebayadvancedsearch_actions.enterExcludeString(dataTable.cell(1, 1));
		//Row 1 Column 2 to get the min
		ebayadvancedsearch_actions.enterMinPrice(dataTable.cell(1, 2));
		//Row 1 Column 3 to get the max
		ebayadvancedsearch_actions.enterMaxPrice(dataTable.cell(1, 3));
		ebayadvancedsearch_actions.clickOnSearchBtn();
		Thread.sleep(3000); // only to see how data was executed in browser, is not neccesary
	}

	
}
