const db = require('../db.js');

class Project {
  constructor (project) {
    this.id = project.id;
    this.company_name = project.company_name;
    this.company_description = project.company_description;
    this.project_description = project.project_description;
    this.link = project.link;
    this.category = project.category;
    this.slug = project.slug;
    this.tags = project.tags;
    this.industry = project.industry;
    this.year = project.year;
    this.role = project.role;
    this.image = project.image;
    this.banner_image = project.banner_image;
    this.homepage_screen = project.homepage_screen;
    this.page_gif = project.page_gif;
  }

  static async create (newproject) {
    return db.query('INSERT INTO projects SET ?', newproject).then(res => { newproject.id = res.insertId; return newproject; });
  }

  static async findById (id) {
    return db.query(`SELECT * FROM projects WHERE id = ${id}`)
      .then(rows => {
        if (rows.length) {
          return Promise.resolve(rows[0]);
        } else {
          const err = new Error();
          err.kind = 'not_found';
          return Promise.reject(err);
        }
      });
  }

  static async nameAlreadyExists (company_name) {
    return db.query('SELECT * FROM projects WHERE company_name = ?', [company_name])
      .then(rows => {
        if (rows.length) {
          return Promise.resolve(true);
        } else {
          return Promise.resolve(false);
        }
      });
  }

  static async getAll (result) {
    return db.query('SELECT * FROM projects');
  }

  static async updateById (id, project) {
    return db.query(
      'UPDATE projects SET company_name = ?, company_description = ?, project_description = ?, link = ?, category = ?, slug = ?, tags = ?, industry = ?, year = ?, role = ?, image = ?, banner_image = ?, homepage_screen = ?, page_gif = ? WHERE id = ?',
      [project.company_name, project.company_description, project.project_description, project.link, project.category, project.slug, project.tags, project.industry, project.year, project.role, project.image, project.banner_image, project.homepage_screen, project.page_gif, id]
    ).then(() => this.findById(id));
  }

  static async remove (id) {
    return db.query('DELETE FROM projects WHERE id = ?', id).then(res => {
      if (res.affectedRows !== 0) {
        return Promise.resolve();
      } else {
        const err = new Error();
        err.kind = 'not_found';
        return Promise.reject(err);
      }
    });
  }

  static async removeAll (result) {
    return db.query('DELETE FROM projects');
  }
}

module.exports = Project;
