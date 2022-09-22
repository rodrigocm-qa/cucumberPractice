package steps;

import org.openqa.selenium.WebDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Tagged_Hooks {

	private WebDriver driver;
	
	public Tagged_Hooks(Global_Hooks global_hooks) {
		driver = global_hooks.getDriver();
	}
	
	@Before(value = "@setCookies", order = 1)
	public void setCookies() {
			System.out.println("Scenario specific hook - setCookies executed");
	}
	
	@After(value = "@deleteCookies", order = 0)
	public void deleteCookies() {
			System.out.println("Scenario specific hook - deleteCookies executed");
	}
}
