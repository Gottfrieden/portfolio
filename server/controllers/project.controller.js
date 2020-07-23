const Project = require('../models/project.model.js');

class ProjectsController {
  static async create (req, res) {
    if (!req.body) {
      return res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }

    if (!req.body.company_name) {
      return res.status(400).send({ errorMessage: 'Project name can not be empty!' });
    }

    try {
      const project = new Project(req.body);
      if (await Project.nameAlreadyExists(project.company_name)) {
        res.status(400).send({ errorMessage: 'A project with this name already exists !' });
      } else {
        const data = await Project.create(project);
        res.status(201).send({ data });
      }
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while creating the project.'
      });
    }
  }

  static async findAll (req, res) {
    try {
      const data = (await Project.getAll()).map(p => new Project(p)).map(p => ({
        id: p.id,
        company_name: p.company_name,
        company_description: p.company_description,
        project_description: p.project_description,
        link: p.link,
        slug: p.slug,
        tags: p.tags,
        industry: p.industry,
        year: p.year,
        role: p.role,
        image: p.image,
        banner_image: p.banner_image,
        homepage_screen: p.homepage_screen,
        page_gif: p.page_gif
      }));
      res.send({ data });
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving projects.'
      });
    }
  }

  static async findOne (req, res) {
    try {
      const data = await Project.findById(req.params.id);
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `project with id ${req.params.id} not found.` });
      } else {
        res.status(500).send({ errorMessage: 'Error retrieving project with id ' + req.params.id });
      }
    }
  }

  static async update (req, res) {
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }

    try {
      const data = await Project.updateById(req.params.id, new Project(req.body));
      res.send({ data });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `project with id ${req.params.id} not found.` });
      } else {
        res.status(500).send({ errorMessage: 'Error updating project with id ' + req.params.id });
      }
    }
  }

  static async delete (req, res) {
    try {
      await Project.remove(req.params.id);
      res.send({ message: 'project was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found project with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete project with id ' + req.params.id
        });
      }
    }
  }
}

module.exports = ProjectsController;
