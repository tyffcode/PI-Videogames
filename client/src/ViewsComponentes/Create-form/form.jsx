import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCountries, postActivity, getActivities } from "../../redux/actions";
import "./form.css";

function Form() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    enablebutton: true,
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  function validate() {
    let errors = {};
    if (!input.name) {
      errors.name = "Activity name is required";
    } else if (!input.difficulty) {
      errors.difficulty = "Difficulty level is required";
    } else if (input.difficulty < 1 || input.difficulty > 5) {
      errors.difficulty = "Invalid difficulty level (1-5)";
    } else if (!input.duration) {
      errors.duration = "Duration of the activity required";
    } else if (input.duration > 120 && input.duration < 1) {
      errors.duration = "Invalid duration (1min - 120min)";
    } else if (input.season.length === 0) {
      errors.season = "Season of the required activity";
    } else if (input.countries.length === 0) {
      errors.countries = "Country/countries required";
    }
    return errors;
  }

  const thereAreErrors = Object.values(errors).some((error) => error);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleSelectCountries(e) {
    if (!input.countries.includes(e.target.value)) {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
    }
  }

  function handleDelete(d) {
    const newInput = {
      ...input,
      countries: input.countries.filter((country) => country !== d),
    };
    setInput(newInput);
    setErrors(validate(newInput));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(input));
    const errorCompletarFormu = validate(input);

    if (thereAreErrors || !input.countries.length) {
      Object.values(errorCompletarFormu).forEach((error) => alert(error));
    } else {
      console.log(input, input.countries);
      dispatch(postActivity(input));
      alert("Activity created");
      navigate("/home");
    }
  }

  return (
    <div className="form">
      <div className="volver">
        <Link to="/home">
          <button>Back home</button>
        </Link>
      </div>
      <h1 className="title">Create your activity!!!</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="formulario">
        <div>
          <label className="display">Name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Activity name"
            required
          />
          {errors.name && <p className="display2">{errors.name}</p>}
        </div>
        <div>
          <label className="display">Difficulty:</label>
          <select
            name="difficulty"
            value={input.difficulty}
            className=""
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            {errors.difficulty && (
              <p className="display2">{errors.difficulty}</p>
            )}
          </select>
        </div>
        <div>
          <label className="display">Duration in minutes:</label>
          <input
            type="number"
            value={input.duration}
            name="duration"
            autoComplete="off"
            min="1"
            max="120"
            onChange={(e) => handleChange(e)}
          />
          {errors.duration && <p className="display2">{errors.duration}</p>}
        </div>
        <div>
          <label className="display">Season</label>
          <select
            value={input.season}
            name="season"
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select season</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            {errors.season && <p className="display2">{errors.season}</p>}
          </select>
        </div>
        <label className="display">Country</label>
        <select
          name="countries"
          onChange={(e) => handleSelectCountries(e)}
          value=""
        >
          <option value={""}> --Select one or more countries--</option>
          {countries
            .filter((country) => !input.countries.includes(country.id))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((country) => (
              <option value={country.id}>{country.name}</option>
            ))}
        </select>
        <div>
          {input.countries.map((country) => (
            <span>
              {countries.find((c) => c.id === country).name}
              <button type="button" onClick={() => handleDelete(country)}>
                x
              </button>
            </span>
          ))}
        </div>
        <div>
          <button type="Submit" className="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
