import React , {useState} from 'react';
import {View , Text , StyleSheet , TextInput , Button , FlatList} from 'react-native';
import Header from './src/component/Header';

const App = () => {
  // State variables
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Event handlers
  const handleAddTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = index => {
    const updateList = [...taskList];
    updateList.splice(index, 1);
    setTaskList(updateList);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a shopping item"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <Button
          title="Add"
          onPress={handleAddTask}
          color="darkslateblue"
          
        />
      </View>

      <FlatList
        data={taskList}
        renderItem={({item, index}) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteTask(index)}
              color="#FF0000"
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    padding:20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    fontSize: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal:20,
    paddingBottom:15,
    borderBottomWidth:1,
    borderBottomColor:'#ccc'

  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
});

export default App;
