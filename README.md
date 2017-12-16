## Overview

In this repository you can find 2 types of PHPSTORM patches:
- Bugs, which you can apply and try to use tools, that I will presents
- Modules, which provides additional tools, that are not existing in Magento yet

{module_creation.patch} is cornerstone patch, that should be installed first of all
All bugs will be applied directly to this patch. 
If you do not want to test bugs, you can ignore this module installation

## Installation

First of all, you need to clone this repository on your local machine.
Next you will need to copy each patch in your root folder and apply it.

## How to apply patch with CLI

$. git apply --directory=app module_creation.patch 

## Troubleshooting

Sometimes phpstorm can`t create folder with module `MageConf` or `MageConfLayout` and tries to put files in similar directory.
So I proposed in this case to create directories manually
