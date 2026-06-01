import React, { useState, useEffect, useMemo} from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { fetchTasks } from '../../../data/api'; 
import { Task } from '../../../components/Task/Task';
import useTheme from '../../../context/themeContext/useTheme';
import styles from './TasksScreen.styles';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { theme } = useTheme(); 
  const isDark = theme === 'dark';

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const sortedTasks = useMemo(() => {
    console.log('⚡ Виконуються «важкі» обчислення: сортування масиву в useMemo!');
    return [...tasks].sort((a, b) => a.completed - b.completed);
  }, [tasks]);
  
  if (loading) {
    return (
      <View style={[styles.center, isDark ? styles.darkBg : styles.lightBg]}>
        <ActivityIndicator size="large" color="#b5cf82" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.center, isDark ? styles.darkBg : styles.lightBg]}>
        <Text style={styles.errorText}>Не вдалося завантажити завдання</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, isDark ? styles.darkBg : styles.lightBg]}>
      <FlatList
        data={sortedTasks} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Task task={item} />} 
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

export default TasksScreen;