import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import {
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  LogOut,
} from "lucide-react";

function AdmissionForm() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedAdmission, setSelectedAdmission] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
      fetchAdmissions();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username,
          password,
        }
      );

      localStorage.setItem("adminToken", response.data.token);
      setIsAuthenticated(true);
      toast.success("Login successful!");
      fetchAdmissions();
    } catch (error) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setAdmissions([]);
    setSelectedAdmission(null);
  };

  const fetchAdmissions = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      console.log("Retrieved token:", token);
      if (!token) {
        toast.error("No authentication token found. Please log in.");
        setIsAuthenticated(false);
        return;
      }
      const response = await axios.get(
        "http://localhost:5000/api/admin/admissions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Admissions data:", response.data); // Debug
      setAdmissions(response.data);
    } catch (error) {
      console.error("Error fetching admissions:", error);
      if (error.response) {
        console.log("Error response:", error.response.data); // Debug
        if (error.response.status === 403) {
          toast.error("Invalid or expired token. Please log in again.");
          localStorage.removeItem("adminToken");
          setIsAuthenticated(false);
          navigate("/admin/login");
        } else if (error.response.status === 401) {
          toast.error("Authentication required. Please log in.");
          setIsAuthenticated(false);
          navigate("/admin/login");
        } else {
          toast.error(`Failed to fetch admissions: ${error.response.data.message || "Unknown error"}`);
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
    }
  };
  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/admin/admissions/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );
      toast.success(`Application ${status} successfully`);
      fetchAdmissions();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const filteredAdmissions = admissions.filter((admission) => {
    const matchesSearch =
      admission.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admission.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admission.parentEmail.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || admission.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Toaster position="top-right" />

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <button
              onClick={() => {
                const csv = admissions.map((a) => ({
                  Name: a.fullName,
                  "Parent Name": a.parentName,
                  "Parent Email": a.parentEmail,
                  "Parent Phone": a.parentPhone,
                  Class: a.class,
                  Status: a.status,
                  "Date Applied": new Date(a.createdAt).toLocaleDateString(),
                }));

                const csvContent =
                  "data:text/csv;charset=utf-8," +
                  Object.keys(csv[0]).join(",") +
                  "\n" +
                  csv.map((row) => Object.values(row).join(",")).join("\n");

                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "admissions.csv");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Admissions Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Applied
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAdmissions.map((admission) => (
                <tr key={admission._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {admission.fullName}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {admission.parentName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {admission.parentEmail}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      Class {admission.class}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${admission.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : admission.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {admission.status.charAt(0).toUpperCase() +
                        admission.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(admission.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedAdmission(admission)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      {admission.status === "pending" && (
                        <>
                          <button
                            onClick={() =>
                              handleStatusUpdate(admission._id, "approved")
                            }
                            className="text-green-600 hover:text-green-900"
                          >
                            <CheckCircle className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() =>
                              handleStatusUpdate(admission._id, "rejected")
                            }
                            className="text-red-600 hover:text-red-900"
                          >
                            <XCircle className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Admission Details Modal */}
      {selectedAdmission && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Admission Details
                </h2>
                <button
                  onClick={() => setSelectedAdmission(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Student Information
                  </h3>
                  <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Full Name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.fullName}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Date of Birth
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.dateOfBirth}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Blood Group
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.bloodGroup}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Religion
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.religion}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Caste
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.caste}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Mother Tongue
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.motherTongue}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Parent/Guardian Information
                  </h3>
                  <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.parentName}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Email
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.parentEmail}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Phone
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.parentPhone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.address}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Additional Information
                  </h3>
                  <dl className="mt-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Previous School
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.previousSchool}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Message
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {selectedAdmission.message}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdmissionForm;