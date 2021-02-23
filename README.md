# Project title: Credit Card Fraud Detection

#### Have you ever pulled up your credit card statement to see transactions you never performed? Or Have you ever used your credit card in a store only to have it declined? One cause for these is that the bank's fraud-detecting technologies have missed to flag suspicious activity or incorrectly flagged a genuine transaction as suspicious. Our team tried various machine learning classification models on the credit card transaction data to determine the best model that would flag suspicious activity more accurately, and we are excited to share our research and predictions in the Heroku app: [https://credit-card-fraud-detection-ml.herokuapp.com/](https://credit-card-fraud-detection-ml.herokuapp.com/)


![app](static/images/ImageBar.png)

# Table of Contents

* [Project Description](#project-description)
* [Data Exploration](#data-exploration)
  * [Data](#data)
  * [Data Imbalance](#data-imbalance)
  * [Transactions Over Time](#transactions-over-time)
  * [Transaction Amount](#transaction-amount)
  * [Feature Correlation Matrix](#feature-correlation-matrix)
* [Predictive Models](#predictive-models)
  * [Process Flow](#process-flow)
  * [Predictive models](#predictive-models)
  * [Undersampling](#undersampling)
  * [Oversampling](#oversampling)
  * [Model Comparison](#model-comparison)
  * [Best Model](#best-model)
* [Conclusion](#conclusion)
* [Future enhancements](#Take-away-and-future-direction)
* [Lessons Learned](#lessons-learned)
* [Requirements](#requirements)  
  * [Languages And Libraries](#languages-and-libraries)
* [Collaborators](#collaborators)
***

# Project Description

## Overview

Credit card fraud is the fastest-growing problem today in the financial market. There has been an accelerated increase in the rate of fraudulent activities in recent years, especially during the COVID time, causing enormous financial losses to many organizations, companies, and government agencies. The fraudulent transaction numbers are assumed to rise in the future. 

According to [The Nilson Report](https://nilsonreport.com/publication_newsletter_archive_issue.php?issue=1164), fraud losses worldwide reached $27.85 billion in 2018 and are projected to rise to $35.67 billion in five years and $40.63 billion in 10 years. Recent trends show a steep rise in credit card fraud, which can be costly to consumers, taxpayers, banks, and payment networks that issue refunds to consumers alike.  

According to [FTC reports](https://www.ftc.gov/system/files/documents/reports/consumer-sentinel-network-data-book-2019/consumer_sentinel_network_data_book_2019.pdf), Credit card fraud tops the identity theft reports from Q2 2017 until Q3 2020. Reports of credit card fraud increased by 107% from Q1 2019 to Q4 2020, Reports of credit card fraud increased by 107% from Q1 2019 to Q4 2020, increasing by only 28% from Q1 2017 to Q1 2019. This rapid spike in 2020 could be because of the new digital normal and boom in online shopping patterns in customers using credit card payments for grocery shopping and deliveries brought in by the COVID-19 pandemic.

## Objective
Our goal as researchers is to focus on detecting fraudulent behaviors early using advanced machine learning techniques. Though credit card fraud detection is not a straightforward task mainly because one being the fraudulent behaviors, which differ for each transaction attempt, and the dataset being imbalanced. 
****   
