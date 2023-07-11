describe('Android Elements Tests', async () => {
  
    it('Find element by accessibility id', async () => {
      console.log("Testando!!")
    // find element by accessibility id
    const appOption = await $('~App');
    //const listview = await $('~App');
  
    // click on element
    await appOption.click();
  
    // assertion
    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeExisting();
    })

    it('Find element by Class Name', async () => {
      //find element by class name
      const className = await $('android.widget.TextView');
      console.log(await className.getText());

      //assertion
      await expect(className).toHaveText("API Demos");
    })

    it('Find element by Xpath', async () => {
      //xpath - (//tagname[@attribute=value])
      await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

      //Find by resource Id
      await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

    //Find by text
      await $('//android.widget.TextView[@text="Command two"]').click();

    //Find bt class - assertion
      const textAssertion = await $('//android.widget.TextView');
      await expect(textAssertion).toHaveText("You selected: 1 , Command two");

    })

    

    

});