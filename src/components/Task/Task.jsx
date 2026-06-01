import React from 'react';
import { View, Text } from 'react-native';
import styles from './Task.style';
import useTheme from '../../context/themeContext/useTheme';

const TaskComponent = ({ task }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark'; 

  return (
    <View 
      style={[
        styles.card, 
        isDark ? styles.darkCard : styles.lightCard, 
        task.completed && styles.completedCard
      ]}
    >
      <Text style={[styles.title, isDark ? styles.darkText : styles.lightText]}>
        {task.title}
      </Text>
      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>
          {task.completed ? 'Виконано ✅' : 'В процесі ⏳'}
        </Text>
      </View>
    </View>
  );
};

export const Task = React.memo(TaskComponent);