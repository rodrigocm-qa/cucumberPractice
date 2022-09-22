package steps;

import static org.junit.Assert.fail;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import actions.Common_Actions;
import actions.EbayHome_Actions;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Ebay_Home_Steps {
	// declaring objects:: to get actions
	Common_Actions common_actions;
	EbayHome_Actions ebayhome_actions;

	// constructor that will contain the objects as arguments
	public Ebay_Home_Steps(Common_Actions common_actions, EbayHome_Actions ebayhome_actions) {
			// so we can use the object methods
			this.common_actions = common_actions;
			this.ebayhome_actions = ebayhome_actions;
	}

	
	@Given("I am on Ebay Home Page")
	public void i_am_on_ebay_home_page() {
		common_actions.goToUrl("https://www.ebay.com/");
	}

	@When("I click on Advanced link")
	public void i_click_on_advanced_link() {
		ebayhome_actions.clickAdvancedLink();
	}

	@Then("I navigate to Advanced Search page")
	public void i_navigate_to_advanced_search_page() {
		String expectedURL = "https://www.ebay.com/sch/ebayadvsearch";
		String actualURL = common_actions.getCurrentPageUrl();
		if (!expectedURL.equals(actualURL)) {
			fail("Page does not navigate to Advanced Search page");
		}
	}

	// Second Scenario with parameters
	@When("I search for {string}")
	public void i_search_for_something(String text) throws Exception {
		ebayhome_actions.searchAnItem(text);
		ebayhome_actions.clickSearchButton();
	}

	@Then("I validate at least {int} items are present")
	public void i_validate_at_least_items_are_present(int count) {
		int itemCountInt = ebayhome_actions.getSearchItemsCount();
		if (itemCountInt < count) {
			fail("Less than 1000 results");
		}
	}

	// Two Parameters
	@When("I search for {string} in {string} category")
	public void i_search_for_in_category(String text, String cat) throws Exception {
		ebayhome_actions.searchAnItem(text);
		ebayhome_actions.selectCategoryOption(cat);
		ebayhome_actions.clickSearchButton();
		Thread.sleep(1000);
	}

	// Scenario Outline (Data Driven)
	@When("I click on menu option {string}")
	public void i_click_on_menu_option(String link) throws Exception {
		ebayhome_actions.clickOnLinkByText(link);
		Thread.sleep(1000);
	}

	@Then("I validate that page navigates to {string} and title is {string}")
	public void i_validate_that_page_navigates_to_and_title_is(String url, String title) throws Exception {
		String actualUrl = common_actions.getCurrentPageUrl();
		String actualTitle = common_actions.getCurrentPageTitle();
		if (!actualUrl.equals(url)) {
			fail("Page doesn't navigate to expected URL: " + url);
		}
		if (!actualTitle.equals(title)) {
			fail("Page title is not the expected: " + title);
		}
		Thread.sleep(1000);
	}
}
