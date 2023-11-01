terraform {
  required_providers {
    aws = {
      version =">=4.9.0"
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  profile ="amplify-cli-macbook"
  region = "ca-central-1"
}