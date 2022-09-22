package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"features"}, //Specify the folder where are the features
		glue = {"steps"}, //Specifies where the step definitions are kept for the features
		plugin = {"pretty", "html:Report1"}, //Specifies Report and Output, {format,file(html, json, juint)} 
		dryRun = false, //true= find out if there is any scenario/Step that does not have any step definition, this help us to get missing snippets
		strict = true, //true= forces to have steps definition for all scenarios in the features files, if not the test will fail 
		monochrome = true //true= helps with the way how the output in the console will be displayed in a cleaner format
		//tags = {"@P5"} //only scenarios that have this tag will be executed in this test
		//name = {"logo"} //will execute scenarios that contains "logo" keyword in the scenario name
		)

public class TestRunner {
}
