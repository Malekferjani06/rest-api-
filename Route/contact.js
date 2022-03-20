// require express
const express = require("express");


// require express router
const router = express.Router();

// require schema
const Contact = require("../model/Contact");

// méthode get : read
// path http://localhost:5000/api/contact/test

router.get("/test", (req, res) => {
  res.send({msg:"hello world"});
});
// méthode post:create
// path http://localhost:5000/api/contact/add
// req.body
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContacts = new Contact({
      name,
      email,
      phone,
    });
    await newContact.save();
    return res.status(200).send({ msg: "newwaddedd" }, newContact);
  } catch (error) {
    return res.status(400).send({ msg: "we can t added", error });
  }
});

// méthode get all :read
// path http://localhost:5000/api/contact/getall

router.get("/getall", async (req, res) => {
  try {
    const contactList = Contact.find();
    return await res.status(200).send({ msg: "this is the list", contactList });
  } catch (error) {
    return await res.status(200).send({ msg: "this is the error", error });
  }
});

// méthode get one (_id)
// path http://loclahost:5000/api/contact/:_id
// req.params

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foundContact = await contact.findOne({ _id });
    return res.status(200).send({ msg: "get this id", foundContact });
  } catch (error) {
    return await res.status(200).send({ msg: "this is the error", error });
  }
});

// méthode updtade put
// path // path http://loclahost:5000/api/edit/:_id
// req.params && req.body
router.put("/edit/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { names, email, phone } = req.body;
    const Editcontact = await Contact.updateOne(
      { _id },
      { $set: { ...req.body } }
    );
    return res.status(200).send({ msg: "jawek beh",Editcontact});
  } catch (error) {}
  return res.status(200).send({ msg: "this is the error", error });
});

// méthode delete
// path http://loclahost:5000/api/delete/:_id
// req.params

router.delete("/del/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deleteContact = await Contact.deleteOne({ _id });
    return res.status(200).send({ msg: "this user is go" });
  } catch (error) {
    return res.status(200).send({ msg: "this is the error", error });
  }
});

module.exports = router;
