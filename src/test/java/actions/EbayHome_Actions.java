package actions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import elements.EbayHome_Elements;
import steps.Global_Hooks;

public class EbayHome_Actions {
	
	private WebDriver driver;
	EbayHome_Elements ebayhome_elements;
	
	public EbayHome_Actions(Global_Hooks global_hooks) {
		this.driver=global_hooks.getDriver();
		ebayhome_elements = new EbayHome_Elements(driver); 
	} 
	
	public void clickAdvancedLink() {
		ebayhome_elements.advancedLink.click();
	}
	
	public void searchAnItem(String srchString) {
		ebayhome_elements.searchBox.sendKeys(srchString);
	}
	
	public void clickSearchButton() {
		ebayhome_elements.searchBtn.click();
	}
	
	public int getSearchItemsCount() {
		String itemCount = ebayhome_elements.numOfItems.getText().trim();
		String itemCount2 = itemCount.replace(".", ""); //In case it has a comma or point, lets remove it
		int itemCountInt = Integer.parseInt(itemCount2); // Converts String to Int
		return itemCountInt;
	}
	
	public void selectCategoryOption(String option) {
		List<WebElement> categories = ebayhome_elements.catOption;
		for(WebElement individualcat : categories) {
			if(individualcat.getText().trim().toLowerCase().equals(option.toLowerCase())) {
				individualcat.click();
				break;
			}
		}
	}
	
	public void clickOnLinkByText(String Text) {
		driver.findElement(By.linkText(Text)).click();
	}

}
