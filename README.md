# Cash Flow Minimizer System

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
