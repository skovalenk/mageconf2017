## Installation

{MageConfSetup.patch} is represented by module, after installation of which you will be able to run on `UpgradeSchema.php` script,
located in this module, any times you want, without adding new versions

### What was done?

This is achieved by adding plugin on `\Magento\Framework\Module\ModuleResource` class, and retrieve static version for `MageConfSetup` 
module
