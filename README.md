# Cash Flow Minimizer - Optimizing Financial Transactions between Banks Using Shortest Path Algorithm

The Cash Flow Minimizer project is an innovative web-based application developed with a focus on optimizing cash flow management through the implementation of graph algorithms, specifically the Shortest Path algorithm. The project, crafted using HTML, CSS, and JavaScript, offers a user-friendly interface that facilitates efficient input of cash flow transactions, providing users with optimized solutions to streamline financial dealings within a group.


## Getting Started  

## Key Features:

# User-Friendly Interface:

The project presents a modern, user-friendly interface designed to offer a seamless experience for users of varying technical backgrounds.
Responsive layouts, clear navigation, and an aesthetically pleasing design contribute to an intuitive and accessible interface.

# Cash Flow Optimization:

Leveraging the power of the Shortest Path algorithm, the application intelligently organizes and prioritizes cash flow transactions based on their magnitudes.
This optimization process allows users to identify the most efficient way to settle debts, thereby minimizing the overall cash flow within the group.
# Auto-Generated Problems:

The application includes a unique "Generate New Problem" feature, dynamically creating diverse cash flow scenarios.
This functionality provides users with a versatile set of problems to solve, enhancing their skills and preparedness for various cash flow management challenges.

# Interactive Problem Solving:

Users can actively participate in solving generated cash flow problems by inputting their solutions.
This interactive feature empowers users to apply their financial expertise and problem-solving skills, allowing them to assess the impact of their decisions on cash flow optimization.

# Technical Components:

## Heap Data Structure:

The project employs the heap data structure as part of the Shortest Path algorithm implementation, enabling efficient analysis, prioritization, and adjustment of cash flow transactions.
HashMap Usage:

A HashMap is utilized to store expenses in the format of person names and corresponding amounts. This data structure facilitates the tracking of cash flow transactions.
Project Workflow:

## Net Amount Calculation:

The algorithm begins by calculating the net amount for each person, obtained by subtracting debts from credits.
The person with the minimum net amount is identified as the first to be settled.
## Selection of First Person:

The algorithm selects the first person to settle based on the minimum of two amounts: the maximum debtor and the maximum creditor. If equal, the maximum debtor is settled; otherwise, the maximum creditor is settled.
## Optimization and Simplification:

The goal is to simplify the debt graph by settling debts directly between creditors and debtors, avoiding unnecessary intermediate transactions.
The algorithm iteratively settles debts, minimizing the overall cash flow until all transactions are resolved.



# For Example : 


If the following weighted directed graph represents some banks and the arrows represent debts between them (SBI owes PNB 20 crore and ICICI 5 crore, PNB owes ICICI 10 crore, etc.):

How to pick the first bank? To pick the first bank, calculate the net amount for every bank where net amount is obtained by subtracting all debts (amounts to pay) from all credits (amounts to be paid). Once net amount for every bank is evaluated, find two banks with maximum and minimum net amounts. These two banks are the most creditors and debtors. The bank with the minimum of the two is our first bank to be settled and removed from the list. Let the minimum of the two amounts be 
𝑥
x. We pay 
𝑥
x crore from the maximum debtor to the maximum creditor and settle one bank. If 
𝑥
x is equal to the maximum debit, then maximum debtor is settled, else maximum creditor is settled.


There's no sense in 10 crore making its way from SBI to PNB and then from PNB to ICICI if SBI could just give it to ICICI directly.

The goal, then, in the general case is to take a debt graph and simplify it (i.e. produce a new graph with the same nodes but different edges).




# Splitwise 
[https://user-images.githubusercontent.com/56497318/127523960-86589587-376e-41a4-867d-805c6c7cf300.mp4](https://github.com/user-attachments/assets/3314e18e-e5ff-4e65-8acd-94a2ae145d27)


### Description
Simplifies dense cash flows

### Skills nurtured:
  - Heap & Graph.
  - Splitwise algorithm to remove unnecessary edges(cash flow) of graph.

### Tech. Stack:
HTML, CSS, JS, CANVAS# Cash Flow Minimizer System

## Overview

The Cash Flow Minimizer System optimizes and minimizes transactions among multiple banks using different payment modes.

## Features

- **Handles Multiple Banks**: Supports transactions between various banks.
- **World Bank Intermediary**: Uses a World Bank to facilitate transactions.
- **Efficient Settlement**: Minimizes the number of transactions to balance accounts.
- **Detailed Output**: Provides a clear list of necessary transactions.

## How It Works

1. **Input Data**:
   - Number of banks
   - Bank names and their payment modes
   - Transaction details
2. **Net Amount Calculation**: Computes the net amount each bank owes or is owed.
3. **Transaction Optimization**: Determines the minimal transactions needed to settle debts.

## Usage

1. **Compile and Run**: 
    ```sh
    g++ -o cash_flow_minimizer main.cpp
    ./cash_flow_minimizer
    ```
2. **Provide Input**: Follow the prompts to enter the number of banks, their details, and transaction information.
3. **Get Output**: View the minimized list of transactions required to balance the cash flow.
