import { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Lock, Mail, Key, LayoutDashboard, Inbox, UserCheck, FolderKanban, 
  LogOut, RefreshCw, Trash2, CheckCircle2, Clock, AlertCircle, FileText, ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO';
import { LoadingState } from '../components/UIStates';

export default function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem('creativion_admin_token') || '');
  const [emailInput, setEmailInput] = useState('admin@creativion.com');
  const [passwordInput, setPasswordInput] = useState('admin123456');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState('overview');

  // Data States
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    newInquiries: 0,
    inDiscussion: 0,
    careerApplications: 0,
    publishedProjects: 4
  });
  const [inquiries, setInquiries] = useState([]);
  const [applications, setApplications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [notification, setNotification] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    if (token) {
      fetchAdminData();
    }
  }, [token]);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoggingIn(true);
    try {
      const res = await axios.post(`${apiUrl}/api/admin/login`, {
        email: emailInput,
        password: passwordInput
      });
      if (res.data.success && res.data.token) {
        localStorage.setItem('creativion_admin_token', res.data.token);
        setToken(res.data.token);
        showNotification('Login successful. Welcome to Creativion Admin.');
      } else {
        setLoginError('Invalid login credentials');
      }
    } catch (err) {
      setLoginError(err.response?.data?.error || 'Authentication failed. Please check credentials.');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('creativion_admin_token');
    setToken('');
  };

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      // Fetch Stats
      const statsRes = await axios.get(`${apiUrl}/api/admin/stats`).catch(() => null);
      if (statsRes && statsRes.data.success) {
        setStats(statsRes.data.data);
      }

      // Fetch Inquiries
      const inqRes = await axios.get(`${apiUrl}/api/inquiries`).catch(() => null);
      if (inqRes && inqRes.data.success) {
        setInquiries(inqRes.data.data || []);
      }

      // Fetch Applications
      const appRes = await axios.get(`${apiUrl}/api/careers/applications`).catch(() => null);
      if (appRes && appRes.data.success) {
        setApplications(appRes.data.data || []);
      }

      // Fetch Projects
      const projRes = await axios.get(`${apiUrl}/api/projects`).catch(() => null);
      if (projRes && projRes.data.success) {
        setProjects(projRes.data.data || []);
      }
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id, newStatus) => {
    try {
      await axios.patch(`${apiUrl}/api/inquiries/${id}`, { status: newStatus });
      setInquiries(prev => prev.map(item => item._id === id ? { ...item, status: newStatus } : item));
      showNotification(`Inquiry status updated to ${newStatus}`);
    } catch (err) {
      showNotification('Failed to update inquiry status');
    }
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      await axios.delete(`${apiUrl}/api/inquiries/${id}`);
      setInquiries(prev => prev.filter(item => item._id !== id));
      showNotification('Inquiry deleted.');
    } catch (err) {
      showNotification('Failed to delete inquiry.');
    }
  };

  const updateAppStatus = async (id, newStatus) => {
    try {
      await axios.patch(`${apiUrl}/api/careers/applications/${id}`, { status: newStatus });
      setApplications(prev => prev.map(item => item._id === id ? { ...item, status: newStatus } : item));
      showNotification(`Application status updated to ${newStatus}`);
    } catch (err) {
      showNotification('Failed to update application status');
    }
  };

  const deleteApp = async (id) => {
    if (!window.confirm('Are you sure you want to delete this career application?')) return;
    try {
      await axios.delete(`${apiUrl}/api/careers/applications/${id}`);
      setApplications(prev => prev.filter(item => item._id !== id));
      showNotification('Application deleted.');
    } catch (err) {
      showNotification('Failed to delete application.');
    }
  };

  // If not logged in, render Login Portal
  if (!token) {
    return (
      <>
        <SEO title="Admin Login — Creativion" description="Creativion Agency Admin Management Portal" />
        <section className="min-h-screen pt-32 pb-20 bg-[#080b11] text-white flex items-center justify-center">
          <div className="max-w-md w-full mx-auto px-4">
            <div className="bg-[#0f1523] border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
              
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-500 mb-2">
                  <Lock className="w-6 h-6" />
                </div>
                <h1 className="font-display font-extrabold text-2xl text-white">
                  CREATIVION ADMIN
                </h1>
                <p className="text-xs text-slate-400">
                  Management Portal Sign-In
                </p>
              </div>

              {loginError && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Admin Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Password</label>
                  <div className="relative">
                    <Key className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loggingIn}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95 disabled:opacity-50"
                >
                  {loggingIn ? 'Authenticating...' : 'Sign In to Dashboard'}
                </button>
              </form>

              <div className="pt-2 text-center text-[11px] text-slate-500">
                Default: <code className="text-slate-400">admin@creativion.com</code> / <code className="text-slate-400">admin123456</code>
              </div>

            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO title="Admin Dashboard — Creativion Agency" description="Creativion Agency Dashboard" />

      <section className="min-h-screen pt-28 pb-20 bg-[#080b11] text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider">
                  Admin Panel
                </span>
                <span className="text-xs text-slate-400">Connected: admin@creativion.com</span>
              </div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                AGENCY DASHBOARD
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchAdminData}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/10 flex items-center gap-2 text-xs font-semibold"
                title="Refresh Data"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {notification && (
            <div className="p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{notification}</span>
            </div>
          )}

          {/* Nav Tabs */}
          <div className="flex items-center space-x-2 border-b border-white/10 pb-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 ${
                activeTab === 'inquiries'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <Inbox className="w-4 h-4" />
              <span>Inquiries ({inquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 ${
                activeTab === 'applications'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Applications ({applications.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Portfolio ({projects.length})</span>
            </button>
          </div>

          {loading && <LoadingState message="Updating dashboard metrics..." />}

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && !loading && (
            <div className="space-y-8">
              
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#0f1523] p-6 rounded-2xl border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase text-slate-400">Total Inquiries</span>
                  <div className="text-3xl font-display font-extrabold text-white">
                    {inquiries.length}
                  </div>
                  <p className="text-[11px] text-blue-400">Submitted project requests</p>
                </div>

                <div className="bg-[#0f1523] p-6 rounded-2xl border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase text-slate-400">New / Unprocessed</span>
                  <div className="text-3xl font-display font-extrabold text-amber-400">
                    {inquiries.filter(i => i.status === 'New').length}
                  </div>
                  <p className="text-[11px] text-slate-400">Awaiting agency follow-up</p>
                </div>

                <div className="bg-[#0f1523] p-6 rounded-2xl border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase text-slate-400">Job Applications</span>
                  <div className="text-3xl font-display font-extrabold text-emerald-400">
                    {applications.length}
                  </div>
                  <p className="text-[11px] text-slate-400">Candidates applied</p>
                </div>

                <div className="bg-[#0f1523] p-6 rounded-2xl border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase text-slate-400">Live Projects</span>
                  <div className="text-3xl font-display font-extrabold text-blue-500">
                    {projects.length}
                  </div>
                  <p className="text-[11px] text-slate-400">Showcased portfolio items</p>
                </div>
              </div>

              {/* Recent Activity lists */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Recent Inquiries */}
                <div className="bg-[#0f1523] rounded-2xl border border-white/10 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-white">Recent Inquiries</h3>
                    <button onClick={() => setActiveTab('inquiries')} className="text-xs text-blue-400 font-semibold hover:underline">View All</button>
                  </div>

                  {inquiries.length === 0 ? (
                    <p className="text-xs text-slate-400 italic py-4">No project inquiries received yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.slice(0, 4).map((inq) => (
                        <div key={inq._id} className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-white">{inq.name}</h4>
                            <p className="text-xs text-slate-400">{inq.service} • {inq.company || 'Direct Client'}</p>
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            inq.status === 'New' ? 'bg-amber-500/20 text-amber-300' : 'bg-blue-500/20 text-blue-300'
                          }`}>
                            {inq.status || 'New'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Recent Applications */}
                <div className="bg-[#0f1523] rounded-2xl border border-white/10 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-white">Recent Applicants</h3>
                    <button onClick={() => setActiveTab('applications')} className="text-xs text-blue-400 font-semibold hover:underline">View All</button>
                  </div>

                  {applications.length === 0 ? (
                    <p className="text-xs text-slate-400 italic py-4">No career applications received yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {applications.slice(0, 4).map((app) => (
                        <div key={app._id} className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-white">{app.name}</h4>
                            <p className="text-xs text-slate-400">{app.position} • {app.experience || 'N/A'}</p>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                            {app.status || 'New'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: INQUIRIES */}
          {activeTab === 'inquiries' && !loading && (
            <div className="bg-[#0f1523] rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="font-display font-bold text-xl text-white">Project Inquiries</h2>
                <span className="text-xs text-slate-400">{inquiries.length} total entries</span>
              </div>

              {inquiries.length === 0 ? (
                <div className="p-12 text-center text-slate-400 text-sm">
                  No project inquiries found.
                </div>
              ) : (
                <div className="divide-y divide-white/5">
                  {inquiries.map((inq) => (
                    <div key={inq._id} className="p-6 hover:bg-white/[0.02] transition-colors space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-white">{inq.name}</h3>
                            {inq.company && <span className="text-xs text-slate-400">({inq.company})</span>}
                          </div>
                          <p className="text-xs text-blue-400 font-semibold mt-0.5">
                            {inq.email} • {inq.phone || 'No phone'}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <select
                            value={inq.status || 'New'}
                            onChange={(e) => updateInquiryStatus(inq._id, e.target.value)}
                            className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 focus:outline-none"
                          >
                            <option value="New" className="bg-[#0f1523]">Status: New</option>
                            <option value="Contacted" className="bg-[#0f1523]">Status: Contacted</option>
                            <option value="In Discussion" className="bg-[#0f1523]">Status: In Discussion</option>
                            <option value="Proposal Sent" className="bg-[#0f1523]">Status: Proposal Sent</option>
                            <option value="Converted" className="bg-[#0f1523]">Status: Converted</option>
                          </select>

                          <button
                            onClick={() => deleteInquiry(inq._id)}
                            className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                            title="Delete Inquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-white/5 p-4 rounded-xl border border-white/5">
                        <div>
                          <span className="text-slate-400 font-semibold block">Requested Service:</span>
                          <span className="text-white font-medium">{inq.service}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block">Budget Expectation:</span>
                          <span className="text-amber-400 font-medium">{inq.budget || 'Not specified'}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-slate-400 font-semibold block mb-1">Project Brief / Message:</span>
                        <p className="text-xs text-slate-200 bg-[#080b11] p-3 rounded-xl border border-white/5 leading-relaxed">
                          {inq.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: APPLICATIONS */}
          {activeTab === 'applications' && !loading && (
            <div className="bg-[#0f1523] rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="font-display font-bold text-xl text-white">Career Applicants</h2>
                <span className="text-xs text-slate-400">{applications.length} applicants</span>
              </div>

              {applications.length === 0 ? (
                <div className="p-12 text-center text-slate-400 text-sm">
                  No career applications received yet.
                </div>
              ) : (
                <div className="divide-y divide-white/5">
                  {applications.map((app) => (
                    <div key={app._id} className="p-6 hover:bg-white/[0.02] transition-colors space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-base font-bold text-white">{app.name}</h3>
                          <p className="text-xs text-emerald-400 font-semibold">
                            Position: {app.position} • Exp: {app.experience || 'N/A'}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <select
                            value={app.status || 'New'}
                            onChange={(e) => updateAppStatus(app._id, e.target.value)}
                            className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 focus:outline-none"
                          >
                            <option value="New" className="bg-[#0f1523]">Status: New</option>
                            <option value="Reviewing" className="bg-[#0f1523]">Status: Reviewing</option>
                            <option value="Shortlisted" className="bg-[#0f1523]">Status: Shortlisted</option>
                            <option value="Rejected" className="bg-[#0f1523]">Status: Rejected</option>
                          </select>

                          <button
                            onClick={() => deleteApp(app._id)}
                            className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                            title="Delete Application"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs bg-white/5 p-4 rounded-xl border border-white/5">
                        <div>
                          <span className="text-slate-400 font-semibold block">Email:</span>
                          <span className="text-white font-medium">{app.email}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block">Phone:</span>
                          <span className="text-white font-medium">{app.phone || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block">Portfolio / Resume:</span>
                          {app.resume ? (
                            <a
                              href={`${apiUrl}/${app.resume}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-400 hover:underline font-semibold flex items-center gap-1 mt-0.5"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>View Resume Asset</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-slate-500">No file uploaded</span>
                          )}
                        </div>
                      </div>

                      {app.coverMessage && (
                        <div>
                          <span className="text-xs text-slate-400 font-semibold block mb-1">Cover Note / Message:</span>
                          <p className="text-xs text-slate-200 bg-[#080b11] p-3 rounded-xl border border-white/5 leading-relaxed">
                            {app.coverMessage}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: PROJECTS */}
          {activeTab === 'projects' && !loading && (
            <div className="bg-[#0f1523] rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="font-display font-bold text-xl text-white">Agency Portfolio Showcase</h2>
                <span className="text-xs text-slate-400">{projects.length} live case studies</span>
              </div>

              <div className="divide-y divide-white/5">
                {projects.map((proj) => (
                  <div key={proj._id} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={proj.coverImage}
                        alt={proj.title}
                        className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                      />
                      <div>
                        <h3 className="text-base font-bold text-white">{proj.title}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Category: <span className="text-blue-400 font-semibold">{proj.category}</span> • Industry: {proj.industry}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        Published
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
