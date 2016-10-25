import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import Entry from '../../components/archive/entry';
import { getCurrentEntry, updateEntry, newEntry, deleteEntry, changeMode } from '../../redux/modules/entries';

export default connect(
  state => ({
    entry: getCurrentEntry(state.entries),
    mode: state.entries.mode
  }),
  {
    onEditEntry: updateEntry,
    onNewEntry: newEntry,
    onDelete: deleteEntry,
    handleEditMode: changeMode('edit'),
    handleViewMode: changeMode('view'),
    initializeForm: entry => initialize('editForm', entry)
  }
)(Entry, 'Entry');
