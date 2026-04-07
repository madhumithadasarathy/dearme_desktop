import React, { createContext, useContext, useState, useEffect } from 'react';
import { readData, writeData } from '../services/storage';

const DataContext = createContext(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};

export const DataProvider = ({ children }) => {
  // --- USER SETTINGS ---
  const [user, setUser] = useState(() => readData('user', {
    name: 'Beautiful',
    phone: '',
    wakeTime: '08:00',
    sleepTime: '22:30',
    cycleLength: 26
  }));

  const saveUser = (newData) => {
    setUser(newData);
    writeData('user', newData);
  };

  // --- ROUTINES ---
  const [tasks, setTasks] = useState(() => readData('tasks', [
    { id: 't1', title: 'Drink a full glass of water', category: 'Morning', points: 10, isActive: true, scheduledTime: '08:00', type: 'fixed', reminderEnabled: true },
    { id: 't2', title: 'Check fasting sugar levels', category: 'Morning', points: 20, isActive: true, scheduledTime: '08:15', type: 'fixed', reminderEnabled: true },
    { id: 't3', title: 'Take morning vitamins', category: 'Morning', points: 10, isActive: true, scheduledTime: '08:30', type: 'fixed', reminderEnabled: false },
    { id: 't4', title: 'Light stretching', category: 'Evening', points: 15, isActive: true, scheduledTime: '21:00', type: 'flexible', reminderEnabled: false },
    { id: 't5', title: 'Write in journal', category: 'Evening', points: 15, isActive: true, scheduledTime: '21:30', type: 'fixed', reminderEnabled: true },
  ]));

  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    writeData('tasks', newTasks);
  };

  // --- COMPLETIONS (LOGS) ---
  const [completions, setCompletions] = useState(() => readData('completions', {})); // Format: { "YYYY-MM-DD": ["taskId_1", "taskId_2"] }

  const toggleTaskCompletion = (dateString, taskId) => {
    const dailyLogs = completions[dateString] || [];
    const isCompleted = dailyLogs.includes(taskId);
    
    let newDailyLogs;
    if (isCompleted) {
      newDailyLogs = dailyLogs.filter(id => id !== taskId);
    } else {
      newDailyLogs = [...dailyLogs, taskId];
    }

    const newCompletions = { ...completions, [dateString]: newDailyLogs };
    setCompletions(newCompletions);
    writeData('completions', newCompletions);
  };

  // --- SUGAR LOGS ---
  const [sugarLogs, setSugarLogs] = useState(() => readData('sugar', [
    { id: 's1', date: new Date().toISOString().split('T')[0], timeSlot: 'Before Breakfast', value: 95, notes: 'Feeling good' }
  ]));

  const addSugarLog = (log) => {
    const newLogs = [...sugarLogs, { ...log, id: Date.now().toString() }];
    setSugarLogs(newLogs);
    writeData('sugar', newLogs);
  };

  const getSugarColorCategory = (value) => {
    if (value < 70) return 'Red';
    if (value >= 70 && value <= 110) return 'Green';
    if (value >= 111 && value <= 199) return 'Yellow';
    if (value >= 200) return 'Red';
    return 'Green';
  };

  // --- JOURNAL ---
  const [journalEntries, setJournalEntries] = useState(() => readData('journal', []));

  const addJournalEntry = (entry) => {
    const newEntries = [...journalEntries, { ...entry, id: Date.now().toString(), date: new Date().toISOString() }];
    setJournalEntries(newEntries);
    writeData('journal', newEntries);
  };

  // --- PERIOD TRACKER ---
  const [period, setPeriod] = useState(() => readData('period', {
    lastStartDate: '',
    cycleLength: 26,
    symptoms: []
  }));

  const savePeriod = (newData) => {
    setPeriod(newData);
    writeData('period', newData);
  };

  // --- REWARDS & STREAKS ---
  const [rewards, setRewards] = useState(() => readData('rewards', {
    totalPoints: 0,
    currentStreak: 0,
    longestStreak: 0,
    redeemed: []
  }));

  const saveRewards = (newData) => {
    setRewards(newData);
    writeData('rewards', newData);
  };

  // --- REMINDERS CONFIGURATION ---
  const [reminders, setReminders] = useState(() => readData('reminders', {
    enabled: true,
    sugarSchedule: ['08:00', '12:00', '19:00'],
    followUpsEnabled: true
  }));

  const saveReminders = (newData) => {
    setReminders(newData);
    writeData('reminders', newData);
  };

  // Build the complete value object to provide down the tree
  const contextValue = {
    user, saveUser,
    tasks, saveTasks,
    completions, toggleTaskCompletion,
    sugarLogs, addSugarLog, getSugarColorCategory,
    journalEntries, addJournalEntry,
    period, savePeriod,
    rewards, saveRewards,
    reminders, saveReminders
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};
