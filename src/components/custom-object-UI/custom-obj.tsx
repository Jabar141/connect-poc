import { useIntl } from 'react-intl';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import messages from '../channels/messages';
import FlatButton from '@commercetools-uikit/flat-button';
import { BackIcon } from '@commercetools-uikit/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useCustomObjectsContainerFetcher, useCustomObjectsFetcher } from '../../hooks/use-channels-connector';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { ContentNotification } from '@commercetools-uikit/notifications';
import styles from '../welcome/welcome.module.css';
import { ChangeEvent, useEffect, useState } from 'react';

type TCustomObjectProps = {
  linkToWelcome: string;
};

const CustomObjectUI = (props: TCustomObjectProps) => {
  const intl = useIntl();
  // const { loading, error, customObjects } = useCustomObjectsFetcher();
  const [options, setOptions] = useState(['customer','product']);
  const [selectedOption, setSelectedOption] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  // TODO: create dropdown based on container field
  // TODO: make table fields editable
  // TODO: post call to update those fields

  useEffect(() => {
    // const fetchOptions = async () => {
    //   try {
    //     const response = await axios.get('/api/options');
    //     setOptions(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchOptions();
  }, []);

  useEffect(() => {
    if (selectedOption) {
      console.log(selectedOption);
    }
  }, [selectedOption]);

  const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>, val: any) => {
    const updatedRows: any = [...updatedEmail];
    updatedRows[index] = event.target.value;
    setUpdatedEmail(updatedRows);
    const updatedObject = { ...val, value: { ...val.value, customerEmail: event.target.value} };
    setUpdatedData(updatedObject);
  };

  const handleSubmit = async () => {
    // try {
    //   await axios.post('/api/update', updatedData);
    // } catch (error) {
    //   console.error(error);
    // }
    console.log(updatedData);
  };

  // const { loading, error, customObjects } = useCustomObjectsFetcher();
  const { loading, error, customObjects } = useCustomObjectsContainerFetcher(selectedOption);
  
  return (
    <>
    {loading && (
      <Spacings.Stack alignItems="center">
        <LoadingSpinner />
      </Spacings.Stack>
    )}
    {error && (
      <ContentNotification type="error">
        <Text.Body>
          {intl.formatMessage(messages.channelDetailsErrorMessage)}
        </Text.Body>
      </ContentNotification>
    )}
    {customObjects && (
      <Spacings.Stack scale="l">
        <Spacings.Stack scale="xs">
          <FlatButton
            as={RouterLink}
            to={props.linkToWelcome}
            label={intl.formatMessage(messages.backToWelcome)}
            icon={<BackIcon />}
          />
        </Spacings.Stack>
        <Spacings.Stack scale="s">
          <Text.Headline as="h2">Custom Object</Text.Headline>
        </Spacings.Stack>
        <Spacings.Stack scale="xs">
          <select className={styles.customselect} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className={styles.customObject}>
            <table className="custom-table">
                <tr>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {customObjects?.results?.length && customObjects?.results.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.key}</td>
                            <td>{val.value.customerName}</td>
                            <td>
                              <input
                                type="text"
                                name="field2"
                                value={updatedEmail[key] || val.value.customerEmail}
                                onChange={(e) => handleInputChange(key, e, val)}
                              />
                            </td>
                        </tr>
                    )
                })}
            </table>
            <button onClick={handleSubmit}>Update Data</button>
          </div>
        </Spacings.Stack>
      </Spacings.Stack>
    )}
    </>
  );
};

CustomObjectUI.displayName = 'CustomObject';

export default CustomObjectUI;