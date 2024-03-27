// components/LoanCalculator.jsx
"use client";
import React, { useState } from 'react';
import { Typography, Button, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function LoanCalculator() {
    const [amount, setAmount] = useState(0);
    const [interest, setInterest] = useState(0);
    const [time, setTime] = useState(0);
    const [emi, setEmi] = useState(0);
    const [totalinterest, setTotalinterest] = useState(0);
    const [totalpayment, setTotalpayment] = useState(0);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
        calculateLoan(event.target.value, interest, time);
    };

    const handleAmountDrag = (event) => {
        setAmount(parseInt(event.target.value));
        calculateLoan(parseInt(event.target.value), interest, time);
    };

    const handlePrincipalchange = (event) => {
        setAmount(event.target.value);
        calculateLoan(event.target.value, interest, time);
    };

    const handleInterestchange = (event) => {
        setInterest(event.target.value);
        calculateLoan(amount, event.target.value, time);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
        calculateLoan(amount, interest, event.target.value);
    };

    const calculateLoan = (amount, interest, time) => {
        if (amount > 0 && interest > 0 && time > 0) {
            let p = parseFloat(amount);
            let r = parseFloat(interest);
            let n = parseFloat(time);

            let actualRate = parseFloat(r / 12 / 100);

            let calcemi =
                p *
                actualRate *
                (Math.pow(1 + actualRate, n) / (Math.pow(1 + actualRate, n) - 1));

            setEmi(Math.round(calcemi));
            setTotalinterest(Math.round(calcemi * n - p));
            setTotalpayment(Math.round(calcemi * n));
        }
    };

    const data = {
        labels: ['Principal', 'Interest'],
        datasets: [
            {
                label: 'Payment Breakdown',
                data: [totalpayment, totalinterest],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ],
            },
        ],
    };
    return (
        <>
            <ToastContainer />
            <Box sx={{ m: 10 }} />
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' }}>
                    <Card sx={{ flex: 1 }}>
                        <div style={{ overflowY: "auto", padding: "40px" }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h5">Amount</Typography>
                                <Typography variant="subtitle1">₹ {amount}</Typography>
                            </Box>
                            <Box sx={{ m: 2 }} />
                            <input
                                type="range"
                                min="10000"
                                max="500000"
                                step="10000"
                                value={amount}
                                onChange={handleAmountDrag}
                                style={{ width: '100%' }}
                            />
                            <Typography variant="caption" display="block" gutterBottom>
                                ₹ 10,000
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom style={{ textAlign: 'right' }}>
                                ₹ 500,000
                            </Typography>

                            <Box sx={{ m: 2 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h5">Loan Duration (Years)</Typography>
                                <Typography variant="subtitle1">{time} years</Typography>
                            </Box>
                            <Box sx={{ m: 2 }} />
                            <input
                                type="range"
                                min="5"
                                max="20"
                                step="1"
                                value={time}
                                onChange={handleTimeChange}
                                style={{ width: '100%' }}
                            />
                            <Typography variant="caption" display="block" gutterBottom>
                                5 years
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom style={{ textAlign: 'right' }}>
                                20 years
                            </Typography>

                            <Box sx={{ m: 2 }} />
                            <TextField
                                label="Enter interest rate"
                                variant="outlined"
                                type="number"
                                name="interest_rate"
                                onChange={handleInterestchange}
                                value={interest}
                                sx={{ minWidth: "92%" }}
                            />
                        </div>
                    </Card>
                    <Card sx={{ flex: 1 }}>
                        <TableContainer>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                                    <Typography variant="h5">Total Pays</Typography>
                                </Box>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center">
                                                <Typography variant="h6" className="font-bold">Loan EMI: ₹ {emi}</Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">
                                                <Typography variant="h6" className="font-bold">Total Interest Payable : ₹ {totalinterest}</Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">
                                                <Typography variant="h6" className="font-bold">Total Payment (Principal + Interest) : ₹ {totalpayment}</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Box width={200} height={200} sx={{ marginTop: '20px', marginBottom: "20px" }}>
                                    <Doughnut data={data} />
                                </Box>
                            </Box>
                        </TableContainer>
                    </Card>
                </Box>
            </Container>
        </>
    );
}