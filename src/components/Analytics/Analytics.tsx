import React, {useEffect, useState} from "react";
import './analytics.scss';
import {connect} from "react-redux";
import Period from "./Period/Period";
import {getExpenses} from "../../redux/history-reducer";
import AnalyticsInfo from "./AnalyticsInfo/AnalyticsInfo";
import {getCategories} from "../../redux/settings-reducer";
import Chart from "../Chart/Chart";

const Analytics = (props: any) => {
    const [dateLower, setDateLower] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0));
    const [dateHigher, setDateHigher] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 0, 0, 0));
    const [showForPeriod, setShowForPeriod] = useState(false);
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [moreInfo, setMoreInfo] = useState({});

    useEffect(() => {
        props.getExpenses();
        props.getCategories();
    }, []);

    const findTotalSpendingForPeriod = () => {
        return [...props.expenses].filter((item: any) => item.id > dateLower && item.id < dateHigher).reduce((sum: any, item: any) => sum + item.spent, 0)
    };
    const findTotalSpending = () => {
        return [...props.expenses].reduce((sum: any, item: any) => sum + item.spent, 0);
    };
    const findSpentCategory = () => {
        let categories: Array<any> = [];

        props.categories.forEach((category: any) => categories.push({
            category: category.name,
            spent: [...props.expenses].filter((item: any) => item.category === category.name).reduce((sum: any, elem: any) => sum + elem.spent, 0),
            expenses: [...props.expenses].filter((item: any) => item.category === category.name),
        }));

        let sum = categories.reduce((sum, item) => sum + item.spent, 0);

        return categories.filter(item => item.spent !== 0).sort((a, b) => a.spent - b.spent).map(item =>
            <Chart func={() => {
                setShowMoreInfo(true);
                setMoreInfo(item.expenses);
            }} key={item.category} spent={item.spent} category={item.category} sum={sum}/>);
    };
    const findSpentCategoryForPeriod = () => {
        let categories: Array<any> = [];

        props.categories.forEach((category: any) => categories.push({
            category: category.name,
            spent: [...props.expenses].filter((item: any) => item.id > dateLower && item.id < dateHigher && item.category === category.name).reduce((sum: any, elem: any) => sum + elem.spent, 0),
            expenses: [...props.expenses].filter((item: any) => item.id > dateLower && item.id < dateHigher && item.category === category.name)
        }));

        let sum = categories.reduce((sum, item) => sum + item.spent, 0);

        return categories.filter(item => item.spent !== 0).sort((a, b) => a.spent - b.spent).map(item =>
            <Chart func={() => {
                setShowMoreInfo(true);
                setMoreInfo(item.expenses);
            }} key={item.category} spent={item.spent}
                   category={item.category} sum={sum}/>);
    };
    const findBiggerSpentForPeriod = () => {
        return [...props.expenses].filter((item: any) => item.id >= dateLower && item.id <= dateHigher && item.spent === Math.max(...props.expenses.filter((item: any) => item.id >= dateLower && item.id <= dateHigher).map((item: any) => item.spent))).map((item: any) =>
            <div className={'biggest-spending'} key={item.id}>
                <p>Name:</p>
                <span>{item.name}</span>
                <p>Spent:</p>
                <span>{item.spent}</span>
                <p>Category:</p>
                <span>{item.category}</span>
                <p>Date:</p>
                <span>{item.date}</span>
                <p>Count:</p>
                <span>{item.count}</span>
            </div>)
    };
    const findBiggerSpent = () => {
        return [...props.expenses].filter((item: any) => item.spent === Math.max(...props.expenses.map((item: any) => item.spent))).map((item: any) =>
            <div className={'biggest-spending'} key={item.id}>
                <p>Name:</p>
                <span>{item.name}</span>
                <p>Spent:</p>
                <span>{item.spent}</span>
                <p>Category:</p>
                <span>{item.category}</span>
                <p>Date:</p>
                <span>{item.date}</span>
                <p>Count:</p>
                <span>{item.count}</span>
            </div>)
    };

    return (
        <div className={'analytics'}>
            <h2>Analytics</h2>
            <Period dateHigher={dateHigher} dateLower={dateLower} setDateLower={setDateLower}
                    setDateHigher={setDateHigher} showForPeriod={showForPeriod} setShowForPeriod={setShowForPeriod}/>

            {showForPeriod ?
                <AnalyticsInfo moreInfo={moreInfo} showMoreInfo={showMoreInfo} showExpensesPerDay={true}
                               dateLower={dateLower} dateHigher={dateHigher}
                               categories={props.categories} title={'Analytics for the time period'}
                               findTotalSpending={findTotalSpendingForPeriod}
                               findSpentCategory={findSpentCategoryForPeriod}
                               findBiggerSpent={findBiggerSpentForPeriod}/>
                :
                <AnalyticsInfo moreInfo={moreInfo} showMoreInfo={showMoreInfo} showExpensesPerDay={false}
                               dateLower={dateLower} dateHigher={dateHigher}
                               categories={props.categories} title={'Summary analytics'}
                               findTotalSpending={findTotalSpending} findSpentCategory={findSpentCategory}
                               findBiggerSpent={findBiggerSpent}/>
            }

        </div>
    )
};

const mapStateToProps = (store: any) => ({
    expenses: store.history.expenses,
    categories: store.settings.categories,
});

export default connect(mapStateToProps, {getExpenses, getCategories})(Analytics);