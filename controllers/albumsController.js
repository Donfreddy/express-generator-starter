module.exports = {
  getAllAlbums(req, res) {
    return res.render('music', { data: 'reached /albums index route!' });
  },
};