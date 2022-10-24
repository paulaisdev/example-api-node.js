import './config/database';
import server from './config/server';

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});