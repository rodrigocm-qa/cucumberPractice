package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Global_Hooks { //We can add common steps in this class 
	
	private WebDriver driver;
	//order method is important, but if it uses 'order' word it doesn´t matter the order where are located each method
	
	@Before()
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@After
	public void tearDown() throws Exception {
		driver.quit();
		Thread.sleep(1000);
	}
		
	public WebDriver getDriver() {
		return driver;
	}

}
